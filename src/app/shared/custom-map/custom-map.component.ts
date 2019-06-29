import {
    Component,
    HostListener,
    Input,
    OnChanges,
    OnInit
} from '@angular/core';
import * as L from 'leaflet';
import * as _ from 'lodash';
import {tileLayer} from 'leaflet';
import {latLng} from 'leaflet';
import '../../../scss/_variables.scss';
import {Router} from '@angular/router';
import {OpenStreetMapProvider} from 'leaflet-geosearch';
import {Constant} from '../../constant/constant';
import {ToastrService} from '../../services/custom/toastr-service/toastr.service';

@Component({
    selector: 'app-custom-map',
    templateUrl: './custom-map.component.html',
    styleUrls: ['./custom-map.component.scss']
})
export class CustomMapComponent implements OnInit, OnChanges {

    @Input() mapData: any;
    @Input() centerLat: any;
    @Input() centerLong: any;
    @Input() isGeoSearch: any;
    @Input() geoResult: any;
    @Input() hideZoomControls: any;
    @Input() isReset: any;
    @Input() zone: any;
    options: any;
    markers: L.Marker[];
    markerClusterData: L.Marker[] = [];
    markerClusterOptions: L.MarkerClusterGroupOptions;
    map: L.Map;

    constructor(private _router: Router,
                private _toastr: ToastrService) {
    }

    @HostListener('click', ['$event.target']) onClick($event) {
        if ($event.getAttribute('data-link')) {
            const goRoute = $event.getAttribute('data-link');
            this._router.navigate([goRoute]);
        }
    }

    mapReady(map: L.Map) {
        this.map = map;
        if (!this.hideZoomControls) {
            this.map.addControl(L.control.zoom({position: 'bottomleft'}));
        } else {
            // To set zoom over user zone for dashboard and details component
            if (this.zone !== 'USA') {
                this.map.fitBounds(this.geoResult[0].bounds);
            }
        }
    }

    ngOnChanges(change: any) {
        if (change.mapData && change.mapData.currentValue) {
            this.fnCreateMap(change.mapData.currentValue);
        } else if (change.geoResult && change.geoResult.currentValue && change.geoResult.currentValue.length) {
            this.fnCreateMap(this.mapData);
        } else {
            if (change.geoResult && change.geoResult.currentValue && !change.geoResult.currentValue.length) {
                this._toastr.info('Couldn\'t find any matching places');
            }
        }
    }

    ngOnInit() {
    }

    fnCreateMap(mapData) {
        this.options = {
            layers: [
                tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; OpenStreetMap contributors',
                    noWrap: true,
                })
            ],
            zoom: 4,
            minZoom: 4,
            center: this.zone === 'USA' ? latLng([Constant.USA.centerLat, Constant.USA.centerLong]) : latLng([this.geoResult[0].y, this.geoResult[0].x]),
            attributionControl: false,
            maxBounds: this.zone === 'USA' ? Constant.USA.maxBounds : this.geoResult[0].bounds,
            zoomControl: false,
        };

        if (this.map) {
            if (this.isGeoSearch || this.zone !== 'USA') {
                setTimeout(() => {
                    this.map.fitBounds(this.geoResult[0].bounds);
                }, 1000);
            }
            // If zone is USA and cross is clicked in search input move map back to USA with center
            if (this.zone === 'USA' && this.isReset) {
                this.map.panTo([Constant.USA.centerLat, Constant.USA.centerLong]);
                this.map.setZoom(4);
            }
        }

        if (mapData && mapData.length) {
            this.markerClusterData = this.generateMarkers(mapData);
        }
    }

    generateMarkers(dataArr: any) {
        this.markers = [];
        let color = '';
        let className = '';
        _.forEach(dataArr, (o, i) => {
            switch (o.health) {
                case 500:
                    color = '#fb0d1c';
                    className = 'bg-red';
                    break;
                case 300:
                    color = '#fc5425';
                    className = 'bg-red';
                    break;
                case 200:
                    color = '#199b8a';
                    className = 'bg-primary';
                    break;
                default:
            }
            const svg = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 56.068 125" enable-background="new 0 0 56.068 100" xml:space="preserve">' +
                '<path stroke="black" stroke-width="2" fill="' + color + '" ' +
                'd="M28.034,0C12.552,0,0,12.552,0,28.034S28.034,100,28.034,100s28.034-56.483,28.034-71.966S43.517,0,28.034,0z' +
                'M28.034,40.477c-6.871,0-12.442-5.572-12.442-12.442c0-6.872,5.571-12.442,12.442-12.442c6.872,0,12.442,5.57,12.442,12.442' +
                'C40.477,34.905,34.906,40.477,28.034,40.477z"/>' +
                ' </svg>';
            let owner = '';
            let address = '';
            let tel = '';
            let email = '';
            let img = '';
            if (o.data) {
                if (o.data.owner && o.data.owner[0]) {
                    owner = (`<div class="d-flex align-items-center mb-3">` +
                        `    <i class="fa fa-2x fa-building mr-2"></i>` +
                        `        <span>${o.data.owner[0]}</span>` +
                        ` </div>`);
                }
                if (o.data.address && o.data.address[0]) {
                    address = (`<div class="d-flex align-items-center mb-3">` +
                        `    <i class="fa fa-2x fa-map-marker mr-2"></i>` +
                        `        <span>${o.data.address[0]}</span>` +
                        ` </div>`);
                }
                if (o.data.tel && o.data.tel[0]) {
                    tel = (`<div class="d-flex align-items-center mb-3">` +
                        `   <i class="fa fa-2x fa-phone mr-2"></i>` +
                        `        <span>${o.data.tel[0]}</span>` +
                        ` </div>`);
                }
                if (o.data.email && o.data.email[0]) {
                    email = (`<div class="d-flex align-items-center mb-3">` +
                        `    <i class="fa fa-2x fa-envelope-o mr-2"></i>` +
                        `        <span>${o.data.email[0]}</span>` +
                        ` </div>`);
                }
                if (o.data.photo && o.data.photo[0]) {
                    img = (`<div class="w-25">` +
                        `<img src="${o.data.photo[0]}" class="rounded-circle pull-right" width="30" height="30">` +
                        `</div>`);
                }
            }
            const content =
                `<div class="d-flex flex-column flex-grow-1">` +
                `<div class="text-white rounded-top ${className}">` +
                `    <div class="d-flex px-3 py-3 align-items-center">` +
                `        <label class="m-0 h6">${o.name}</label>` +
                `    </div>` +
                `</div>` +
                `<div class="body px-3 pt-3 overflow-auto d-flex">` +
                `   <div class="w-75">` +
                owner + address + tel + email +
                `   </div>` +
                img +
                `</div>` +
                `<div class="px-3 pb-3">` +
                `       <a class="pull-right cursor-pointer" data-link="/device/${o.id}">View Details</a>` +
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
