import {Component, OnInit} from '@angular/core';
import {DeviceService} from '../../../services/node/device.service';
import {GatewayService} from '../../../services/node/gateway.service';
import * as _ from 'lodash';
import {ToastrService} from '../../../services/custom/toastr-service/toastr.service';
import {ClusterService} from '../../../services/node/cluster.service';
import {Constant} from '../../../constant/constant';
import {CommonService} from '../../../services/custom/common-service/common.service';
import {DeviceImageService} from '../../../services/custom/deviceImage-service/device-image.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {TelemetryStatisticsComponent} from '../../../modals/telemetry-statistics/telemetry-statistics.component';
import {PhotoGalleryComponent} from '../../../modals/photo-gallery/photo-gallery.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    toogleAll: boolean;
    rowAll: boolean;
    isDataLoading: boolean;

    deviceData: any = Constant.deviceData; // Constant.deviceData
    gatewayData: any = [];
    clustersData: any = [];
    selectedDevices: any = [];
    okCount: any = 0;
    attentionCount: any = 0;
    criticalCount: any = 0;
    searchText: string;
    centerLat: any;
    centerLong: any;

    constructor(private _device: DeviceService,
                private _gateway: GatewayService,
                private _cluster: ClusterService,
                private _common: CommonService,
                private _deviceImageService: DeviceImageService,
                private _toastr: ToastrService,
                private _modalService: NgbModal) {
        this.toogleAll = true;
        this.isDataLoading = true;
        this.centerLat = 38.89511;
        this.centerLong = -77.03637;
    }

    ngOnInit() {
        // Todo: Remove the boolean assignment and enable cluster call
        /*this.isDataLoading = false;
        this.okCount = this.fnGetHealthCounts(200);
        this.attentionCount = this.fnGetHealthCounts(300);
        this.criticalCount = this.fnGetHealthCounts(500);*/
        this.getClusters();
    }

    fnSearchDevices(e) {
        if (this.searchText.length) {
            if (e.keyCode === 13) {
                const query = 'contains(#{id}, ${' + this.searchText + '}) or contains(#{name}, ${' + this.searchText + '}) or contains(#{description}, ${' + this.searchText + '}) or contains(#{phase}, ${' + this.searchText + '}) or contains(#{typeId}, ${' + this.searchText + '}) or contains(#{health}, ${' + this.searchText + '}) or contains(#{defaultHealth}, ${' + this.searchText + '})';
                this.isDataLoading = true;
                this.getDevices(query);
            }
        } else if (!this.searchText) {
            this.isDataLoading = true;
            this.getDevices();
        }
    }

    fnGetHealthCounts(healthCode) {
        return _.filter(this.deviceData, (device: any) => {
            return device.health === healthCode;
        }).length;
    }

    getDevices(query?: string) {
        this._device.getDevices(query).subscribe((devices: any) => {
            _.forEach(devices, (async (device) => {
                if (device.gatewayId) {
                    device.gateway = _.find(this.gatewayData, {'id': device.gatewayId});
                } else {
                    device.gateway = {};
                }
                const clusterArr = _.filter(this.clustersData, (cluster: any) => {
                    return cluster.deviceIds.includes(device.id);
                });
                device.clusters = clusterArr.length ? clusterArr : [];
                if (device.data && device.data.photo && device.data.photo[0]) {
                    device.photo = await this._deviceImageService.getDeviceImage(device.data.photo[0]);
                    return device;
                }
            }));
            this.deviceData = devices;
            this.okCount = this.fnGetHealthCounts(200);
            this.attentionCount = this.fnGetHealthCounts(300);
            this.criticalCount = this.fnGetHealthCounts(500);
            this.isDataLoading = false;
        }, (err) => {
            if (err && err.error && err.error.message) {
                this._toastr.error(err.error.message);
            }
            this.isDataLoading = false;
        });
    }


    getGateways(query?: string) {
        this._gateway.getGateways(query).subscribe((gateways) => {
            this.gatewayData = gateways;
            this.getDevices();
        }, (err) => {
            if (err && err.error && err.error.message) {
                this._toastr.error(err.error.message);
            }
            this.gatewayData = [];
            this.getDevices();
        });
    }

    getClusters() {
        this.isDataLoading = true;
        this._cluster.getClusters().subscribe((clusters) => {
            this.clustersData = clusters;
            this.getGateways();
        }, (err) => {
            if (err && err.error && err.error.message) {
                this._toastr.error(err.error.message);
            }
            this.clustersData = [];
            this.getGateways();
        });
    }

    fnGetCoordinates(data) {
        const coordinates = this._common.setLatLng(data);
        this.centerLat = coordinates.centerLat;
        this.centerLong = coordinates.centerLong;
    }

    checkDevice() {
        this.selectedDevices = _.filter(this.deviceData, (device: any) => {
            return device.state;
        });
        this.fnGetCoordinates(this.selectedDevices);
    }

    checkAll(event?) {
        this.deviceData.forEach(x => x.state = event.target.checked);
        if (event.target.checked) {
            this.selectedDevices = _.cloneDeepWith(this.deviceData);
        } else {
            this.selectedDevices = [];
        }
        this.fnGetCoordinates(this.selectedDevices);
    }

    isAllChecked() {
        return this.deviceData.every(o => o.state);
    }

    openPhotoGalleryModal(photo, name) {
        const modal: NgbModalRef = this._modalService.open(PhotoGalleryComponent, { size: 'lg', backdrop: 'static' });
        modal.componentInstance.photoURL = photo;
        modal.componentInstance.title = name;
    }

}
