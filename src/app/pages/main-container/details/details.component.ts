import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DeviceService} from '../../../services/node/device.service';
import {CommonService} from '../../../services/custom/common-service/common.service';
import {GatewayService} from '../../../services/node/gateway.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
    deviceId: string;
    gatewayId: string;
    centerLat: any;
    centerLong: any;
    device: any;
    gateway: any;

    constructor(private _route: ActivatedRoute,
                private _device: DeviceService,
                private _common: CommonService,
                private _gateway: GatewayService) {
        // ToDo: Remove all lines below once API gives proper data
        this.device = {
            'id': 'a7504eb0-04ffb381-5e363c9b',
            'phase': 'PRODUCTION',
            'connection': 'CONNECTED',
            'typeId': 'd9cd02a2',
            'gatewayId': '00000000-04714477',
            'oem': 'SOLiD',
            'model': 'R6',
            'version': '6.3',
            'mode': 'DUPLEX',
            'name': 'TIC - Park Place Irvine SOLiD Rel 6 DMS1200',
            'description': 'The Irvine Company - Park Place Aparments SOLiD Rel6 DMS1200',
            'health': 300,
            'defaultHealth': 200,
            'data': {
                'lat': [
                    '28.4170294'
                ],
                'long': [
                    '-81.4289348'
                ],
                'name': ['Noah Place'],
                'owner': ['Building Systems Inc'],
                'address': ['385 Noah Place Suite 878'],
                'tel': ['875-255-7945'],
                'email': ['info@form.com'],
                'photo': ['assets/images/pexels-photo-374023.jpeg'],
            },
            'properties': {
                'https': false,
                'port': 80,
                'vaultId': 'a7504eb0-0a91d17b',
                'ip': '192.168.1.3'
            }
        };
        this.gatewayId = this.device.gatewayId;
        this.getGateway(this.gatewayId);
        this.fnGetCoordinates([this.device]);
    }

    ngOnInit() {
        this._route.params.subscribe((params: any) => {
            if (params.hasOwnProperty('id')) {
                this.deviceId = params['id'];
                // ToDo: Uncomment once API gives proper data
                //this.getDevice(this.deviceId);
            }
        });
    }


    fnGetCoordinates(data) {
        const coordinates = this._common.setLatLng(data);
        this.centerLat = coordinates.centerLat;
        this.centerLong = coordinates.centerLong;
    }

    getDevice(deviceId) {
        this._device.getDevice(deviceId).subscribe((device) => {
            this.device = device;
            this.gatewayId = this.device.gatewayId;
            this.getGateway(this.gatewayId);
            this.fnGetCoordinates(this.device);
        });
    }

    getGateway(gatewayId) {
        this._gateway.getGateway(gatewayId).subscribe((gateway) => {
            this.device.gateway = gateway;
        }, (err) => {
        });
    }

    getIssues() {

    }
}
