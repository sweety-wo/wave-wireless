import {AfterViewInit, Component, Input, OnChanges, OnInit} from '@angular/core';
import * as L from 'leaflet';
import * as _ from 'lodash';
import {tileLayer} from 'leaflet';
import {latLng} from 'leaflet';

@Component({
    selector: 'app-custom-map',
    templateUrl: './custom-map.component.html',
    styleUrls: ['./custom-map.component.scss']
})
export class CustomMapComponent implements OnInit, OnChanges {

    @Input() mapData: any;
    options: any;
    centerLat: any;
    centerLong: any;
    markerClusterData: L.Marker[] = [];
    markerClusterOptions: L.MarkerClusterGroupOptions;

    constructor() {
    }

    ngOnChanges(change: any) {
        if (change.mapData && change.mapData.currentValue) {
            this.fnCreateMap(change.mapData.currentValue);
        }
    }

    fnCreateMap(mapData) {
        _.forEach(mapData, (o) => {
            if (o.data && o.data.long[0] && o.data.lat[0]) {
                this.centerLat = o.data.lat[0];
                this.centerLong = o.data.long[0];
                if (this.centerLat && this.centerLong) {
                    return false;
                }
            }
        });

        this.options = {
            layers: [
                tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; OpenStreetMap contributors',
                })
            ],
            zoom: 5,
            center: latLng([this.centerLat, this.centerLong]),
        };
        this.markerClusterData = this.generateMarkers(mapData);
    }

    ngOnInit() {

    }

    generateMarkers(dataArr: any): L.Marker[] {
        const content =
            '<div class="d-flex">' +
            '<div class="w-75">' +
            '<ul class="pt-2 pb-2">' +
            '<li>Noah Place</li>' +
            '</ul>' +
            '<ul class="">' +
            '<li>Building Systems Inc</li>' +
            '</ul>' +
            '<ul class="">' +
            '<li>Noah Place suite</li>' +
            '</ul>' +
            '<ul class="">' +
            '<li>0123456788</li>' +
            '</ul>' +
            '<ul class="">' +
            '<li>info@test.com</li>' +
            '</ul>' +
            '</div>' +
            '<div class="w-25">' +
            '<img src="assets/images/pexels-photo-374023.jpeg" class="rounded-circle" width="30" height="30">' +
            '</div>' +
            '</div>';
        const data: L.Marker[] = [];
        _.forEach(dataArr, (o) => {
            if (o.data && o.data.long[0] && o.data.lat[0]) {
                const icon = L.icon({
                    iconUrl: 'leaflet/marker-icon.png',
                    shadowUrl: 'leaflet/marker-shadow.png'
                });
                data.push(L.marker([o.data.lat[0], o.data.long[0]], {icon})
                    .bindPopup(content)
                    .openPopup()
                );
            }
        });
        return data;

    }

}
