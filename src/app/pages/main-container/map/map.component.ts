import {Component, OnInit} from '@angular/core';
import 'leaflet.markercluster';
import {Constant} from '../../../constant/constant';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
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
    geoResult: any;
    isDeviceLoading: boolean;

    constructor(private _device: DeviceService) {
        this.deviceData = Constant.deviceData;
        this.isDeviceLoading = true;
    }

    ngOnInit() {
        this.getDevices();
        this.filteredData = _.filter(this.deviceData, (device: any) => {
            return (device.health === Constant.CRITICAL_HEALTH || device.health === Constant.ATTENTION_HEALTH);
        });
    }

    getDevices () {
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
        if (res.searchOption === 'Custom') {

        } else {
            const provider = new OpenStreetMapProvider();
            this.geoResult = await provider.search({ query: res.searchText });
        }

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

