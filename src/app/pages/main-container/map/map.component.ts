import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import 'leaflet.markercluster';
import {Constant} from '../../../constant/constant';
import {OpenStreetMapProvider} from 'leaflet-geosearch';
import * as _ from 'lodash';
import {DeviceService} from '../../../services/node/device.service';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    deviceData: any;
    filteredData: any;
    centerLat: any;
    centerLong: any;
    geoResult: any;
    isDeviceLoading: boolean;
    isGeoSearch: boolean;

    constructor(private _device: DeviceService, private ref: ChangeDetectorRef) {
        this.deviceData = Constant.deviceData;
        this.isDeviceLoading = true;
        this.centerLat = 38.89511;
        this.centerLong = -77.03637;
    }

    ngOnInit() {

        this.getDevices();
        this.filteredData = _.filter(this.deviceData, (device: any) => {
            return (device.health === Constant.CRITICAL_HEALTH || device.health === Constant.ATTENTION_HEALTH);
        });
       this.setLatLng(this.filteredData);
    }

    setLatLng(data) {
        if (data && data.length) {
            _.forEach(data, (o) => {
                if (o.data && o.data.lat && o.data.long && o.data.long[0] && o.data.lat[0]) {
                    this.centerLat = o.data.lat[0];
                    this.centerLong = o.data.long[0];
                    if (this.centerLat && this.centerLong) {
                        return false;
                    }
                }
            });
        } else {
            this.centerLat = 38.89511;
            this.centerLong = -77.03637;
        }
    }

    getDevices() {
        this.isDeviceLoading = false;
        /*this._device.getDevices().subscribe((devices) => {
            console.log('devices', devices);
            this.deviceData = devices;
            this.filteredData = devices;
            this.isDeviceLoading = false;
        }, (err) => {
            this.isDeviceLoading = false;
        });*/
    }

    async fnSearch(res: any) {
        this.isGeoSearch = res.isGeoSearch;
        if (res.searchOption === 'Custom') {

        } else {
            if (res.isGeoSearch) {
                const provider = new OpenStreetMapProvider();
                this.geoResult = await provider.search({ query: res.searchText });
                if (this.geoResult && this.geoResult.length) {
                    this.centerLat = this.geoResult && this.geoResult[0]['y'];
                    this.centerLong = this.geoResult && this.geoResult[0]['x'];
                } else {
                    this.centerLat = 38.89511;
                    this.centerLong = -77.03637;
                }
                // search reset
            } else if (!res.isGeoSearch && !res.isFromFilter) {
                this.setLatLng(this.filteredData);
            }
        }

        if (res.isFromFilter) {
            const healthArr: any = [];
            _.forOwn(res, (value, key) => {
                if (value === true) {
                    healthArr.push(Constant[key]);
                }
            });
            this.filteredData = _.filter(this.deviceData, (device: any) => {
                return (healthArr.includes(device.health));
            });
        }
    }
}

