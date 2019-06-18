import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DeviceService} from '../../../services/node/device.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
    deviceId: string;
    device: any;

    constructor(private _route: ActivatedRoute, private _device: DeviceService) {
    }

    ngOnInit() {
        this._route.params.subscribe((params: any) => {
            if (params.hasOwnProperty('id')) {
                this.deviceId = params['id'];
                this.getDevice(this.deviceId);
            }
        });
    }

    getDevice(deviceId) {
        this._device.getDevice(deviceId).subscribe((response) => {
            this.device = response;
        });
    }
}
