import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as _ from 'lodash';
import * as moment from 'moment';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

import {DeviceService} from '../../../services/node/device.service';
import {CommonService} from '../../../services/custom/common-service/common.service';
import {GatewayService} from '../../../services/node/gateway.service';
import {IssueService} from '../../../services/tracker/issue/issue.service';
import {TelemetryStatisticsComponent} from '../../../modals/telemetry-statistics/telemetry-statistics.component';

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
    issues: any;
    ghosts: any;
    filteredGhosts: any;
    alarmSearch: string;
    telemetrySearch: string;
    isIssueLoading: boolean;
    isDeviceLoading: boolean;
    isGhostLoading: boolean;

    constructor(private _route: ActivatedRoute,
                private _device: DeviceService,
                private _common: CommonService,
                private _gateway: GatewayService,
                private _issue: IssueService,
                private _modalService: NgbModal) {
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
                // this.getDevice(this.deviceId);
                // ToDo: Remove from below once API gives proper data
                this.getIssues();
                this.getDeviceGhosts('00000000-0a628d7c-a97077d0');
            }
        });
    }


    fnGetCoordinates(data) {
        const coordinates = this._common.setLatLng(data);
        this.centerLat = coordinates.centerLat;
        this.centerLong = coordinates.centerLong;
    }

    getDevice(deviceId) {
        this.isDeviceLoading = true;
        this._device.getDevice(deviceId).subscribe((device) => {
            this.device = device;
            this.gatewayId = this.device.gatewayId;
            this.getGateway(this.gatewayId);
            this.getIssues();
            this.getDeviceGhosts(deviceId);
            this.fnGetCoordinates(this.device);
        }, (err) => {
            this.isDeviceLoading = false;
        });
    }

    getGateway(gatewayId) {
        this._gateway.getGateway(gatewayId).subscribe((gateway) => {
            this.device.gateway = gateway;
            this.isDeviceLoading = false;
        }, (err) => {
        });
    }

    getIssues(query?: string) {
        this.isIssueLoading = true;
        this._issue.getIssues(query).subscribe((issues) => {
            this.isIssueLoading = false;
            this.issues = issues;
            _.forEach(this.issues, (issue: any) => {
                if (issue.commentIds.length === 1) {
                    issue.createdAt = `Created ${moment(moment.unix(issue.created).format('MM/DD/YYYY HH:mm:ss')).fromNow()}`;
                } else {
                    issue.createdAt = `Updated ${moment(moment.unix(issue.lastUpdated).format('MM/DD/YYYY HH:mm:ss')).fromNow()}`;
                }
            });
        }, (err) => {
            this.isIssueLoading = false;
        });
    }


    getDeviceGhosts(deviceId) {
        this.isGhostLoading = true;
        this._device.getDeviceGhosts(deviceId).subscribe((ghosts) => {
            this.ghosts = ghosts;
            this.filteredGhosts = ghosts;
            this.isGhostLoading = false;
        }, (err) => {
            this.isGhostLoading = false;
        });
    }

    getIssuesLabelColor(label) {
        if (label.color) {
            return {
                'background-color': label.color,
            };
        }
    }

    getGhostHealthDetail(health) {
        let className = '';
        let title = '';
        switch (health) {
            case 500:
                className = 'bg-red';
                title = 'CRITICAL';
                break;
            case 300:
                className = 'bg-orange';
                title = 'ATTENTION';
                break;
            case 200:
                className = 'bg-primary';
                title = 'OK';
                break;
            default:
        }
        return {className, title};
    }

    search(e) {
        if (this.alarmSearch) {
            if (e.key === 'Enter') {
                const query = 'contains(#{id}, ${' + this.alarmSearch + '}) or contains(#{title}, ${' + this.alarmSearch + '}) or contains(#{state}, ${' + this.alarmSearch + '}) or contains(#{labels}, ${' + this.alarmSearch + '}) or contains(#{created}, ${' + this.alarmSearch + '}) or contains(#{createdBy}, ${' + this.alarmSearch + '}) or contains(#{lastUpdated}, ${' + this.alarmSearch + '}) or contains(#{lastUpdatedBy}, ${' + this.alarmSearch + '}) or contains(#{assignee},${' + this.alarmSearch + '})';
                this.getIssues(query);
            }
        } else if (!this.alarmSearch) {
            this.getIssues();
        }
    }

    customSearch(e) {
        if (this.telemetrySearch) {
            if (e.key === 'Enter') {
                this.filteredGhosts = _.filter(this.ghosts, (item: any) => {
                    return Object.values(item).some(val =>
                        String(val).includes(this.telemetrySearch)
                    );
                });
            }
        } else if (!this.telemetrySearch) {
            this.filteredGhosts = this.ghosts;
        }
        if (_.isEmpty(this.filteredGhosts)) {
            this.filteredGhosts = null;
        }
    }

    openTelemetryStatisticsModal(ghost) {
        const modal: NgbModalRef = this._modalService.open(TelemetryStatisticsComponent, { size: 'lg', backdrop: 'static' });
        modal.componentInstance.ghost = ghost;

    }


}
