import {AfterViewInit, Component, Input, OnChanges, OnInit} from '@angular/core';
import * as L from 'leaflet';
import * as _ from 'lodash';
import {tileLayer} from 'leaflet';
import {latLng} from 'leaflet';
import '../../../scss/_variables.scss';

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
    markers: L.Marker[] = [];
    markerClusterData: L.Marker[] = [];
    markerClusterOptions: L.MarkerClusterGroupOptions;

    mapReady(map: L.Map) {
        map.addControl(L.control.zoom({position: 'bottomleft'}));
    }

    constructor() {
        this.centerLat = 38.89511;
        this.centerLong = -77.03637;
    }

    ngOnChanges(change: any) {
        if (change.mapData && change.mapData.currentValue) {
            this.fnCreateMap(change.mapData.currentValue);
        }
    }

    fnCreateMap(mapData) {
        _.forEach(mapData, (o) => {
            if (o.data && o.data.lat && o.data.lang && o.data.long[0] && o.data.lat[0]) {
                this.centerLat = o.data.lat[0];
                this.centerLong = o.data.long[0];
                if (this.centerLat && this.centerLong) {
                    return false;
                }
            }
        });

        const maxScreenDimension = window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth;
        const tileSize = 256;
        const maxTiles = Math.floor(maxScreenDimension / tileSize);
        let minZoom = Math.ceil(Math.log(maxTiles) / Math.log(2));
        minZoom = minZoom < 2 ? 2 : minZoom;
        const bounds = new L.LatLngBounds(new L.LatLng(85, -180), new L.LatLng(-85, 180));
        console.log(minZoom);

        this.options = {
            layers: [
                tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; OpenStreetMap contributors',
                    noWrap: true,
                })
            ],
            zoom: 5,
            center: latLng([this.centerLat, this.centerLong]),
            attributionControl: false,
            zoomControl: false,
            maxBounds: bounds,
            minZoom: minZoom
        };
        this.markerClusterData = this.generateMarkers(mapData);
    }

    ngOnInit() {
    }

    generateMarkers(dataArr: any) {
        let color = '';
        _.forEach(dataArr, (o) => {
            switch (o.health) {
                case 500:
                    color = '#fb0d1c';
                    break;
                case 300:
                    color = '#fc5425';
                    break;
                case 200:
                    color = '#199b8a';
                    break;
                default:
            }
            const svg = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 56.068 125" enable-background="new 0 0 56.068 100" xml:space="preserve">' +
                '<path stroke="black" stroke-width="2" fill="' + color + '" ' +
                'd="M28.034,0C12.552,0,0,12.552,0,28.034S28.034,100,28.034,100s28.034-56.483,28.034-71.966S43.517,0,28.034,0z' +
                'M28.034,40.477c-6.871,0-12.442-5.572-12.442-12.442c0-6.872,5.571-12.442,12.442-12.442c6.872,0,12.442,5.57,12.442,12.442' +
                'C40.477,34.905,34.906,40.477,28.034,40.477z"/>' +
                ' </svg>';
            const content =
                `<div class="d-flex flex-column flex-grow-1">` +
                `<div class="text-white rounded-top bg-red">` +
                `    <div class="d-flex px-3 py-3 align-items-center">` +
                `        <label class="m-0 h6">Noah Place</label>` +
                `    </div>` +
                `</div>` +
                `<div class="body px-3 pt-3 overflow-auto d-flex">` +
                `   <div class="w-75">` +
                `        <div class="d-flex align-items-center mb-3">` +
                `            <i class="fa fa-2x fa-building mr-2"></i>` +
                `            <span>Building Systems Inc.</span>` +
                `        </div>` +
                `        <div class="d-flex align-items-center mb-3">` +
                `             <i class="fa fa-2x fa-map-marker mr-2"></i>` +
                `            <span>385 Noah Place Suite 878</span>` +
                `        </div>` +
                `        <div class="d-flex align-items-center mb-3">` +
                `             <i class="fa fa-2x fa-phone mr-2"></i>` +
                `            <span>877-255-7945</span>` +
                `        </div>` +
                `        <div class="d-flex align-items-center mb-2">` +
                `           <i class="fa fa-2x fa-envelope-o mr-2"></i>` +
                `            <span>info@from.com</span>` +
                `        </div>` +
                `   </div>` +
                `   <div class="w-25">` +
                `<img src="assets/images/pexels-photo-374023.jpeg" class="rounded-circle pull-right" width="30" height="30">` +
                `</div>` +
                `</div>` +
                `<div class="px-3 pb-3">` +
                `       <a class="pull-right" href="javascript:void(0)" routerLink="/details">View Details</a>` +
                `</div>` +
                `</div>`;
            if (o.data && o.data.long[0] && o.data.lat[0]) {
                const icon = L.icon({
                    iconUrl: 'data:image/svg+xml;base64,' + btoa(svg),
                    iconSize: [25, 41], // size of the icon
                    shadowSize: [50, 64], // size of the shadow
                    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
                    shadowAnchor: [4, 62],  // the same for the shadow
                    popupAnchor: [0, -42] // point from which the popup should open relative to the iconAnchor
                });
                this.markers.push(L.marker([o.data.lat[0], o.data.long[0]], {icon})
                    .bindPopup(content)
                    .openPopup()
                );
            }
        });
        return this.markers;

    }

}
