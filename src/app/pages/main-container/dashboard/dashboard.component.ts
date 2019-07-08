import {Component, OnInit} from '@angular/core';
import {OpenStreetMapProvider} from 'leaflet-geosearch';
import * as _ from 'lodash';
import {Paho} from 'ng2-mqtt/mqttws31';
import {DeviceService} from '../../../services/node/device.service';
import {GatewayService} from '../../../services/node/gateway.service';
import {ToastrService} from '../../../services/custom/toastr-service/toastr.service';
import {ClusterService} from '../../../services/node/cluster.service';
import {Constant} from '../../../constant/constant';
import {CommonService} from '../../../services/custom/common-service/common.service';
import {DeviceImageService} from '../../../services/custom/deviceImage-service/device-image.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {PhotoGalleryComponent} from '../../../modals/photo-gallery/photo-gallery.component';
import {AttributeToggleConfirmationComponent} from '../../../modals/attribute-toggle-confirmation/attribute-toggle-confirmation.component';
import {SelectClustersModalComponent} from '../../../modals/select-clusters-modal/select-clusters-modal.component';
import {AuthService} from '../../../services/custom/auth-service/auth.service';
import {DropdownOptions} from '../../../constant/dropdown-options';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    toogleAll: boolean;
    isDataLoading: boolean;

    deviceData: any = Constant.deviceData; // Constant.deviceData
    resetDeviceData: any = []; // Constant.deviceData
    gatewayData: any = [];
    clustersData: any = [];
    selectedDevices: any = [];
    okCount: any = 0;
    attentionCount: any = 0;
    criticalCount: any = 0;
    searchText: string;
    centerLat: any;
    centerLong: any;
    selectedFooterDropDownOption: any;
    searchOptions: any;
    selectedSearchOption: any = {};
    dashboardFooterItemsArr = [{
        id: 'addToGroup',
        name: 'Add to Group'
    }, {
        id: 'removeFromGroup',
        name: 'Remove from Group'
    }];
    geoResult: any;
    zone: any;
    private _client: Paho.MQTT.Client;
    common: any;
    chartFilterOptions: any = [];
    selectedChartFilterOption: any = {};
    filterArr: any = [
        {
            name: 'OK_HEALTH',
            count: 0,
            code: 200,
            isSelected: true
        },
        {
            name: 'ATTENTION_HEALTH',
            count: 0,
            code: 300,
            isSelected: true
        },
        {
            name: 'CRITICAL_HEALTH',
            count: 0,
            code: 500,
            isSelected: true
        }
    ];

    constructor(private _device: DeviceService,
                private _gateway: GatewayService,
                private _cluster: ClusterService,
                private _common: CommonService,
                private _deviceImageService: DeviceImageService,
                private _toastr: ToastrService,
                private _modalService: NgbModal,
                private _auth: AuthService) {
        this.common = _common;
        this.toogleAll = true;
        this.isDataLoading = true;
        this.centerLat = 38.89511;
        this.centerLong = -77.03637;
        this.selectedFooterDropDownOption = this.dashboardFooterItemsArr[0];
        this.searchOptions = DropdownOptions.dashboardSearchOptions;
        this.selectedSearchOption = DropdownOptions.dashboardSearchOptions[0];
        this.chartFilterOptions = DropdownOptions.chartFilterOptions;
        this.selectedChartFilterOption = this.chartFilterOptions[0];
    }

    ngOnInit() {
        // Todo: Remove the boolean assignment and enable cluster call
        /*this.isDataLoading = false;
        this.okCount = this.fnGetHealthCounts(200);
        this.attentionCount = this.fnGetHealthCounts(300);
        this.criticalCount = this.fnGetHealthCounts(500);*/
        this.fnGetCoordinates(this.selectedDevices);
        this.getClusters();
    }

    fnSearchDevices(e) {
        if (this.searchText.length) {
            if (e.keyCode === 13) {
                if (this.selectedSearchOption.value === 'devices') {
                    const query = 'contains(#{id}, ${' + this.searchText + '}) or contains(#{name}, ' +
                        '${' + this.searchText + '}) or contains(#{description}, ${' + this.searchText + '}) ' +
                        'or contains(#{phase}, ${' + this.searchText + '}) or contains(#{typeId}, ' +
                        '${' + this.searchText + '}) or contains(#{health}, ${' + this.searchText + '}) ' +
                        'or contains(#{defaultHealth}, ${' + this.searchText + '})';
                    this.isDataLoading = true;
                    this.getDevices(query);
                } else {
                    const clusterQuery = 'contains(#{id}, ${' + this.searchText + '}) or contains(#{name}, ' +
                        '${' + this.searchText + '}) or contains(#{description}, ${' + this.searchText + '}) ' +
                        'or contains(#{deviceIds}, ${' + this.searchText + '})';
                    this.isDataLoading = true;
                    this.getClusters(clusterQuery);
                }
            }
        } else if (!this.searchText) {
            this.isDataLoading = true;
            this.getDevices();
        }
    }

    fnGetCoordinates(data) {
        if (data && data.length) {
            const coordinates = this._common.setLatLng(data);
            this.centerLat = coordinates.centerLat;
            this.centerLong = coordinates.centerLong;
        } else {
            this._auth.loggedInUser.subscribe(async user => {
                if (user && user.data && user.data.zone) {
                    this.zone = user.data.zone[0];
                    if (this.zone) {
                        const provider = new OpenStreetMapProvider();
                        this.geoResult = await provider.search({query: this.zone});
                    }
                } else {
                    this.zone = 'USA';
                    const provider = new OpenStreetMapProvider();
                    this.geoResult = await provider.search({query: this.zone});
                }
            });
        }
    }


    fnSetSearchOption(option) {
        if (this.searchText && this.searchText.length) {
            this.searchText = '';
            this.isDataLoading = true;
            this.getDevices();
        }
        this.selectedSearchOption = option;
    }

    fnGetHealthCounts(healthCode) {
        return _.filter(this.deviceData, (device: any) => {
            return device.health === healthCode;
        }).length;
    }

    async getDevices(query?: string) {
        this._device.getDevices(query).subscribe((devices: any) => {
            if (devices.length) {
                _.forEach(devices, (async (device) => {
                    if (device.gatewayId) {
                        device.gateway = _.find(this.gatewayData, {'id': device.gatewayId});
                    } else {
                        device.gateway = {};
                    }
                    const clusterArr = _.filter(this.clustersData, (cluster: any) => {
                        return cluster.deviceIds && cluster.deviceIds.includes(device.id);
                    });
                    device.clusters = clusterArr.length ? clusterArr : [];
                    if (device.data && device.data.photo && device.data.photo[0]) {
                        device.photo = await this._deviceImageService.getDeviceImage(device.data.photo[0]);
                        return device;
                    }
                }));
                this.deviceData = devices;
                this.filterArr[0].count = this.fnGetHealthCounts(200);
                this.filterArr[1].count = this.fnGetHealthCounts(300);
                this.filterArr[2].count = this.fnGetHealthCounts(500);
                if (this.deviceData.length > 0) {
                    this.fnGetDeviceAttributes();
                } else {
                    this.isDataLoading = false;
                }
            } else {
                this.okCount = 0;
                this.attentionCount = 0;
                this.criticalCount = 0;
                this.deviceData = [];
                this.isDataLoading = false;
            }
        }, (err) => {
            if (err && err.error && err.error.message) {
                this._toastr.error(err.error.message);
            }
            this.okCount = 0;
            this.attentionCount = 0;
            this.criticalCount = 0;
            this.deviceData = [];
            this.isDataLoading = false;
        });
    }

    async fnGetDeviceAttributes() {
        await Promise.all(this.deviceData.map(async (device, index) => {
            const ghostObj = await this._device.getDeviceGhosts(device.id);
            const enabledObj = {
                both: false,
                one: false,
                none: false,
                missingAttr: false,
            };
            if (ghostObj['700_rf_switch'] || ghostObj['800_rf_switch']) {
                if (ghostObj['700_rf_switch'].reported === 'OFF' && ghostObj['800_rf_switch'].reported === 'OFF') {
                    enabledObj.none = true;
                } else if (ghostObj['700_rf_switch'].reported === 'ON' && ghostObj['800_rf_switch'].reported === 'ON') {
                    enabledObj.both = true;
                } else {
                    enabledObj.one = true;
                }
            } else {
                enabledObj.missingAttr = true;
            }
            this.deviceData[index].deviceEnabledObj = enabledObj;
        }));
        this.resetDeviceData = _.cloneDeepWith(this.deviceData);
        this.isDataLoading = false;
    }

    getGateways(query?: string) {
        this._gateway.getGateways(query).subscribe((gateways) => {
            this.gatewayData = gateways;
            this.getDevices();
        }, (err) => {
            if (err && err.error && err.error.message) {
                this._toastr.error(err.error.message);
            }
            this.gatewayData = [];
            this.getDevices();
        });
    }

    getClusters(query?: string) {
        this.isDataLoading = true;
        this._cluster.getClusters(query).subscribe((clusters) => {
            this.clustersData = clusters;
            if (query) {
                if (this.clustersData.length) {
                    _.forEach(this.clustersData, (cluster) => {
                        if (cluster.deviceIds) {
                            const deviceCp = [];
                            _.forEach(cluster.deviceIds, (deviceId) => {
                                const deviceIndex = _.findIndex(this.deviceData, (device: any) => {
                                    return device.id === deviceId;
                                });
                                if (deviceIndex !== -1) {
                                    deviceCp.push(this.deviceData[deviceIndex]);
                                }
                            });
                            this.deviceData = deviceCp;
                        }
                    });
                } else {
                    this.deviceData = [];
                }
                this.isDataLoading = false;
            } else {
                this.getGateways();
            }
        }, (err) => {
            if (err && err.error && err.error.message) {
                this._toastr.error(err.error.message);
            }
            this.clustersData = [];
            this.getGateways();
        });
    }

    checkDevice() {
        this.selectedDevices = _.filter(this.deviceData, (device: any) => {
            return device.state;
        });

        this.fnGetCoordinates(this.selectedDevices);
    }

    checkAll(event?) {
        this.deviceData.forEach(x => x.state = event.target.checked);
        if (event.target.checked) {
            this.selectedDevices = _.cloneDeepWith(this.deviceData);
        } else {
            this.selectedDevices = [];
        }
        this.fnGetCoordinates(this.selectedDevices);
    }

    isAllChecked() {
        return this.deviceData.every(o => o.state);
    }

    fnSelectFooterItem(index) {
        this.selectedFooterDropDownOption = this.dashboardFooterItemsArr[index];
    }

    fnSelectFilterOption(filterOption) {
        this.selectedChartFilterOption = filterOption;
    }

    fnTriggerFooterEvent() {
        switch (this.selectedFooterDropDownOption.id) {
            case 'addToGroup':
            case 'removeFromGroup':
                const modal: NgbModalRef = this._modalService.open(SelectClustersModalComponent,
                    {size: 'lg', backdrop: 'static', centered: true});
                modal.result.then((result) => {
                    this.clustersData = result.clustersArr;
                    _.forEach(this.deviceData, (device) => {
                        const clusterArr = _.filter(this.clustersData, (cluster: any) => {
                            return cluster.deviceIds && cluster.deviceIds.includes(device.id);
                        });
                        device.clusters = clusterArr.length ? clusterArr : [];
                    });
                }, () => {
                });
                modal.componentInstance.clustersArr = this.clustersData;
                modal.componentInstance.selectedDevices = this.selectedDevices;
                modal.componentInstance.isAdd = this.selectedFooterDropDownOption.id === 'addToGroup';
                break;
        }
    }

    onConnectionLost(responseObject) {
        const self = this;
        if (responseObject.errorCode !== 0) {
            self.fnInitializeDeviceWebSockets();
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

    fnInitializeDeviceWebSockets() {
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

    openPhotoGalleryModal(photo, name) {
        const modal: NgbModalRef = this._modalService.open(PhotoGalleryComponent, {size: 'lg', backdrop: 'static'});
        modal.componentInstance.photoURL = photo;
        modal.componentInstance.title = name;
    }

    openAttributeToggleConfirmationModal(event) {
        const modal: NgbModalRef = this._modalService.open(AttributeToggleConfirmationComponent,
            {size: 'lg', backdrop: 'static', centered: true});
        modal.result.then((result) => {
            _.forEach(result.deviceIdArr, (deviceId) => {
                const index = _.findIndex(this.deviceData, {'id': deviceId});
                if (index !== -1) {
                    const deviceObj = Object.assign({}, this.deviceData[index]);
                    const enabledObj = {
                        both: false,
                        one: false,
                        none: false,
                        missingAttr: false,
                    };
                    switch (result.selectedSwitch) {
                        case '700':
                        case '800':
                            enabledObj.one = true;
                            break;
                        case 'both':
                            if (result.doEnable) {
                                enabledObj.both = true;
                            } else {
                                enabledObj.none = true;
                            }
                            break;
                    }
                    deviceObj.deviceEnabledObj = enabledObj;
                    this.deviceData[index] = deviceObj;
                }
            });
        }, () => {
        });
        modal.componentInstance.doEnable = event.doEnable;
        if (event.isCalledFromHeader) {
            modal.componentInstance.dataIdArr = _.map(this.selectedDevices, (device) => {
                return device.id;
            });
        } else {
            modal.componentInstance.dataIdArr = [event.dataObj.id];
        }
        modal.componentInstance.isCalledFromHeader = event.isCalledFromHeader;

    }

    getFilterData(option) {
        option.isSelected = !option.isSelected;
        const tempHealthArr = [];
        _.forEach(this.filterArr, (filterObj: any) => {
            if (filterObj.isSelected === true) {
                tempHealthArr.push(filterObj.code);
            }
        });
        this.deviceData = _.filter(this.resetDeviceData, (deviceObj: any) => {
            if (tempHealthArr.includes(deviceObj.health)) {
                return deviceObj;
            }
        });
    }
}
