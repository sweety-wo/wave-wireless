import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import {latLng, tileLayer} from 'leaflet';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    options = {
        layers: [
            tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors',
            })
        ],
        zoom: 7,
        center: latLng([46.879966, -121.726909]),
    };

    markerClusterData: L.Marker[] = [];
    markerClusterOptions: L.MarkerClusterGroupOptions;

    constructor() {
    }

    ngOnInit() {
        this.markerClusterData = this.generateData(1000);
    }

    generateLat() {
        return Math.random() * 360 - 180;
    }

    generateLon() {
        return Math.random() * 180 - 90;
    }

    generateData(count: number): L.Marker[] {
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
        for (let i = 0; i < count; i++) {

            const icon = L.icon({
                iconUrl: 'leaflet/marker-icon.png',
                shadowUrl: 'leaflet/marker-shadow.png'
            });
            data.push(L.marker([this.generateLon(), this.generateLat()], {icon})
                .bindPopup(content).openPopup());
        }
        return data;

    }
}

