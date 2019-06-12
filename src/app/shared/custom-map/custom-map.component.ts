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

    mapReady(map: L.Map) {
        map.addControl(L.control.zoom({ position: 'bottomleft' }));
    }

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
            attributionControl: false,
            zoomControl: false,
        };
        this.markerClusterData = this.generateMarkers(mapData);
    }

    ngOnInit() {

    }

    generateMarkers(dataArr: any): L.Marker[] {
        const content =
            '<div class="d-flex flex-column">' +
            '<div class="w-100 h-25">' +
            '<label class="d-inline-block w-75">Noah Place</label>' +
            '<img src="assets/images/pexels-photo-374023.jpeg" class="w-25 rounded-circle pull-right" width="30" height="30">' +
            '</div>' +
            '<div class="w-100 h-75">' +
            '<div class="my-3">' +
            '<i class="fa fa-2x fa-building mr-2"></i>' +
            '<span>Building Systems Inc</span>' +
            '</div>' +
            '<div class="my-3">' +
            '<i class="fa fa-2x fa-map-marker mr-2"></i>' +
            '<span>Noah Place suite</span>' +
            '</div>' +
            '<div class="my-3">' +
            '<i class="fa fa-2x fa-phone mr-2"></i>' +
            '<span>0123456788</span>' +
            '</div>' +
            '<div class="my-3">' +
            '<i class="fa fa-2x fa-envelope-o mr-2"></i>' +
            '<span>info@test.com</span>' +
            '</div>' +
            '<div class="my-3">' +
            '<a class="pull-right" href="javascript:void(0)">View Details</a>' +
            '</div>' +
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
