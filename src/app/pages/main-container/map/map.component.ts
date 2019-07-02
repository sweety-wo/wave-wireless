import {Component, OnInit, OnDestroy} from '@angular/core';
import 'leaflet.markercluster';
import {Constant} from '../../../constant/constant';
import {OpenStreetMapProvider} from 'leaflet-geosearch';
import * as _ from 'lodash';
import {Paho} from 'ng2-mqtt/mqttws31';
import {DeviceService} from '../../../services/node/device.service';
import {CommonService} from '../../../services/custom/common-service/common.service';
import {AuthService} from '../../../services/custom/auth-service/auth.service';


@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
    deviceData: any;
    filteredData: any;
    geoResult: any = [];
    pieData = [];
    isDeviceLoading: boolean;
    private _client: Paho.MQTT.Client;
    isGeoSearch: boolean;
    isReset: boolean;
    zone: any;
    healthArr: any = [500, 300];

    constructor(private _device: DeviceService,
                private _common: CommonService,
                private _auth: AuthService) {
        this.isDeviceLoading = true;
    }

    async ngOnInit() {
        this._auth.loggedInUser.subscribe(user => {
            if (user && user.data && user.data.zone) {
                this.zone =  user.data.zone[0];
            } else {
                this.zone = 'USA';
            }
        });
        if (this.zone) {
            const provider = new OpenStreetMapProvider();
            this.geoResult = await provider.search({query: this.zone});

        }
        this.getDevices();
    }

    fnCreatePieChartData(deviceData) {
        const attention = deviceData.reduce(function (n, device) {
            return n + (device.health === 300);
        }, 0);
        const critical = deviceData.reduce(function (n, device) {
            return n + (device.health === 500);
        }, 0);
        const ok = deviceData.reduce(function (n, device) {
            return n + (device.health === 200);
        }, 0);
        this.pieData = [
            {
                name: this._common.getHealthDetail(300).title,
                color: this._common.getHealthDetail(300).color,
                y: attention,
            },
            {
                name: this._common.getHealthDetail(500).title,
                color: this._common.getHealthDetail(500).color,
                y: critical,
            },
            {
                name: this._common.getHealthDetail(200).title,
                color: this._common.getHealthDetail(200).color,
                y: ok,
            }];
    }

    getDevices(query?: string, isCustomSearch?: boolean) {
        this._device.getDevices(query).subscribe((devices) => {
            this.deviceData = devices;
            if (isCustomSearch) {
                this.filteredData = _.filter(this.deviceData, (device: any) => {
                    return (this.healthArr.includes(device.health));
                });
            } else {
                this.filteredData = _.filter(this.deviceData, (device: any) => {
                    return (device.health === Constant.CRITICAL_HEALTH || device.health === Constant.ATTENTION_HEALTH);
                });
            }
            this.fnCreatePieChartData(this.filteredData);
            this.fnInitializeWebSockets();
            this.isDeviceLoading = false;
        }, (err) => {
            this.isDeviceLoading = false;
        });
    }


    ngOnDestroy() {
        if (this._client) {
            this._client.disconnect();
        }
    }


    onConnectionLost(responseObject) {
        const self = this;
        if (responseObject.errorCode !== 0) {
            self.fnInitializeWebSockets();
        }
    }

    onMessageArrived(message) {
        const messageJson = JSON.parse(message.payloadString);
        const index = _.findIndex(this.deviceData, (device: any) => {
            return device.id === messageJson.id;
        });
        if (index !== -1) {
            this.fnUpdateDevices(messageJson, index, this.deviceData);
        }
        const filteredIndex = _.findIndex(this.filteredData, (device: any) => {
            return device.id === messageJson.id;
        });
        if (filteredIndex !== -1) {
            this.fnUpdateDevices(messageJson, index, this.filteredData);
        }
    }

    fnUpdateDevices(messageJson, index, devicesArr) {
        if (devicesArr[index]) {
            if (messageJson.health) {
                devicesArr[index].health = messageJson.health;
            }
            if (messageJson.phase) {
                devicesArr[index].phase = messageJson.phase;
            }
            if (messageJson.connection) {
                devicesArr[index].connection = messageJson.connection;
            }
        }
    }

    fnInitializeWebSockets() {
        let loginUser: any;
        const self = this;
        this._auth.loggedInUser.subscribe((user) => {
            if (user) {
                loginUser = user;
                const webSocketId = loginUser.id.split('-')[0];
                this._common.getWebSocketUrl('wss/node/devices/' + webSocketId)
                    .subscribe((res: any) => {
                        self._client = new Paho.MQTT.Client(res.url, res.clientId);

                        self._client.onConnectionLost = self.onConnectionLost;
                        self._client.onMessageArrived = self.onMessageArrived;

                        const connectOptions = {
                            onSuccess: function () {
                                // console.log('device websocket onConnect'); // eslint-disable-line
                                self._client.subscribe(res.topic, '');
                            },
                            useSSL: true,
                            timeout: 3,
                            mqttVersion: 4,
                            onFailure: function () {
                                /*console.log("device websocket onFail"); //eslint-disable-line*/
                            }
                        };
                        self._client.connect(connectOptions);
                    });
            }
        });
    }

    async fnSearch(res: any) {
        if (res.searchOption === 'Custom' && res.searchText) {
            const text = res.searchText;
            const query = 'contains(#{id}, ${' + text + '}) or contains(#{name}, ${' + text + '}) or contains(#{description}, ${' + text + '}) or contains(#{phase}, ${' + text + '}) or contains(#{typeId}, ${' + text + '}) or contains(#{health}, ${' + text + '}) or contains(#{defaultHealth}, ${' + text + '})';
            this.getDevices(query, true);
        } else {
            // Get all device data when Geo Search option is selected after Custom option as device data will be only the one's that are filtered
            if (res.isDropdownChanged) {
                this.getDevices();
            }
            // Geo search
            if (res.isGeoSearch && res.searchText) {
                const provider = new OpenStreetMapProvider();
                this.geoResult = await provider.search({query: res.searchText});
                this.isGeoSearch = res.isGeoSearch;
                this.isReset = res.isReset;
                // search reset
            } else if (!res.isGeoSearch && !res.isFromFilter) {
                const provider = new OpenStreetMapProvider();
                this.geoResult = await provider.search({query: this.zone});
                this.isGeoSearch = res.isGeoSearch;
                this.isReset = res.isReset;
            }
        }

        // Filters of health
        if (res.isFromFilter) {
            this.healthArr = [];
            _.forOwn(res, (value, key) => {
                // Looping only over health keys
                if (value === true && key !== 'isFromFilter') {
                    this.healthArr.push(Constant[key]);
                }
            });

            this.filteredData = _.filter(this.deviceData, (device: any) => {
                return (this.healthArr.includes(device.health));
            });
            this.fnCreatePieChartData(this.filteredData);
        }
    }
}

