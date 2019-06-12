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
    searchText: string;
    searchOption: string;

    constructor() {
        this.deviceData = Constant.deviceData;
    }

    ngOnInit() {
    }

    async fnSearch(res: any) {
        this.searchText = res.searchText;
        this.searchOption = res.searchOption;
        // setup
        if (this.searchOption === 'Custom') {

        } else {
            const provider = new OpenStreetMapProvider();
            const results = await provider.search({ query: this.searchText });
            console.log("results", results);
        }

    }



    fnGeoSearch(qry) {

    }

}

