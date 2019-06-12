import {Component, OnInit} from '@angular/core';
import 'leaflet.markercluster';
import {Constant} from '../../../constant/constant';
import * as L from 'leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

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

    constructor() {
        this.deviceData = Constant.deviceData;
        this.filteredData = Constant.deviceData;
    }

    ngOnInit() {
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
            const filteredData = _.filter(this.deviceData, (device) => {
                return device.health === this.searchFilter;
            });
            this.filteredData = filteredData;
        }

    }



    fnGeoSearch(qry) {

    }

}

