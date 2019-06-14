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
    searchText: string;
    searchOption: string;
    searchFilter: number;
    isDeviceLoading: boolean;

    constructor(private _device: DeviceService) {
        this.deviceData = Constant.deviceData;
        this.filteredData = Constant.deviceData;
        this.isDeviceLoading = true;
    }

    ngOnInit() {
        this.getDevices();
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

    fnSearch(res: any) {
        this.searchText = res.searchText;
        this.searchOption = res.searchOption;
        this.searchFilter = res.searchFilter;
        // setup
        /*if (this.searchOption === 'Custom') {

        } else {
            const provider = new OpenStreetMapProvider();
            const results = await provider.search({ query: this.searchText });
            console.log("results", results);
        }
*/
        if (this.searchFilter)  {
            const filteredData = _.filter(this.deviceData, (device: any) => {
                return device.health === this.searchFilter;
            });
            this.filteredData = filteredData;
        }

    }



    fnGeoSearch(qry) {

    }

}

