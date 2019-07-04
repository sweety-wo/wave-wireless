import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as _ from 'lodash';
import * as moment from 'moment';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {OpenStreetMapProvider} from 'leaflet-geosearch';

import {DeviceService} from '../../../services/node/device.service';
import {CommonService} from '../../../services/custom/common-service/common.service';
import {GatewayService} from '../../../services/node/gateway.service';
import {IssueService} from '../../../services/tracker/issue/issue.service';
import {TelemetryStatisticsComponent} from '../../../modals/telemetry-statistics/telemetry-statistics.component';
import {DeviceImageService} from '../../../services/custom/deviceImage-service/device-image.service';
import {PhotoGalleryComponent} from '../../../modals/photo-gallery/photo-gallery.component';
import {TimelineComponent} from '../../../modals/timeline/timeline.component';
import {DropdownOptions} from '../../../constant/dropdown-options';
import {AuthService} from '../../../services/custom/auth-service/auth.service';
import {AttributeToggleConfirmationComponent} from '../../../modals/attribute-toggle-confirmation/attribute-toggle-confirmation.component';

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
    geoResult: any;
    zone: any;
    _: any;
    common: any;
    filteredGhosts: any;
    alarmNameMappingOptions: any;
    alarmSearch: string;
    telemetrySearch: string;
    isIssueLoading: boolean;
    isDeviceLoading: boolean;
    isGhostLoading: boolean;
    healthClass: string;
    chartFilterOptions: any = [];
    selectedChartFilterOption: any = {};

    constructor(private _route: ActivatedRoute,
                private _device: DeviceService,
                private _common: CommonService,
                private _gateway: GatewayService,
                private _issue: IssueService,
                private _deviceImageService: DeviceImageService,
                private _modalService: NgbModal,
                private _auth: AuthService,
                ) {
        this.alarmNameMappingOptions = DropdownOptions.alarmOptions;
        this._ = _;
        this.common = _common;
        this.isGhostLoading = true;
        this.healthClass = 'bg-default';
        this.chartFilterOptions = DropdownOptions.chartFilterOptions;
        this.selectedChartFilterOption = this.chartFilterOptions[0];
    }

    async ngOnInit() {
        this._route.params.subscribe((params: any) => {
            if (params.hasOwnProperty('id')) {
                this.deviceId = params['id'];
                 this.getDevice(this.deviceId);
            }
        });
        this._auth.loggedInUser.subscribe(user => {
            if (user && user.data && user.data.zone) {
                this.zone =  user.data.zone[0];
            } else {
                this.zone = 'USA';
            }
        });
        if (this.zone) {
            const provider = new OpenStreetMapProvider();
            this.geoResult = await provider.search({query: this.zone});
        }
    }

    fnGetCoordinates(data) {
        if (data && data.length) {
            const coordinates = this._common.setLatLng(data);
            this.centerLat = coordinates.centerLat;
            this.centerLong = coordinates.centerLong;
        } else {
            this._auth.loggedInUser.subscribe(async user => {
                if (user && user.data && user.data.zone) {
                    this.zone =  user.data.zone;
                    if (this.zone) {
                        const provider = new OpenStreetMapProvider();
                        this.geoResult = await provider.search({query: this.zone});
                    }
                } else {
                    this.zone = 'USA';
                    const provider = new OpenStreetMapProvider();
                    this.geoResult = await provider.search({query: this.zone});
                }
            });
        }
    }

    getDevice(deviceId) {
        this.isDeviceLoading = true;
        this.isIssueLoading = true;
        this.isGhostLoading = true;
        this._device.getDevice(deviceId).subscribe((device) => {
            this.device = device;
            this.fnGetDeviceHealthClass();
            this.getDeviceImage();
            this.gatewayId = this.device.gatewayId;
            this.getGateway(this.gatewayId);
            this.getIssues();
            this.getDeviceGhosts(this.deviceId);
            this.fnGetCoordinates([this.device]);
        }, (err) => {
            this.isDeviceLoading = false;
        });
    }

    fnGetDeviceHealthClass() {
        if (this.device.health) {
            switch (this.device.health) {
                case 200:
                    this.healthClass = 'bg-primary';
                    break;
                case 300:
                    this.healthClass = 'bg-orange';
                    break;
                case 500:
                    this.healthClass = 'bg-red';
                    break;
                default:
                    this.healthClass = 'bg-default';
            }
        }
    }

    async getDeviceImage() {
        if (this.device.data && this.device.data.photo && this.device.data.photo[0]) {
            this.device.photo = await this._deviceImageService.getDeviceImage(this.device.data.photo[0]);
        }
    }

    getGateway(gatewayId) {
        this._gateway.getGateway(gatewayId).subscribe((gateway) => {
            this.device.gateway = gateway;
            this.isDeviceLoading = false;
        }, (err) => {
            this.isDeviceLoading = false;
        });
    }

    getIssues(query?: string) {
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


    async getDeviceGhosts(deviceId) {
        const ghosts = await this._device.getDeviceGhosts(deviceId);
        const enabledObj = {
            both: false,
            one: false,
            none: false,
            missingAttr: false,
        };
        if (ghosts['700_rf_switch'] || ghosts['800_rf_switch']) {
            if (ghosts['700_rf_switch'].reported === 'OFF' && ghosts['800_rf_switch'].reported === 'OFF') {
                enabledObj.none = true;
            } else if (ghosts['700_rf_switch'].reported === 'ON' && ghosts['800_rf_switch'].reported === 'ON') {
                enabledObj.both = true;
            } else {
                enabledObj.one = true;
            }
        } else {
            enabledObj.missingAttr = true;
        }
        this.device.deviceEnabledObj = enabledObj;
        this.ghosts = ghosts;
        this.filteredGhosts = ghosts;
        this.isGhostLoading = false;
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

    fnSelectFilterOption(filterOption) {
        this.selectedChartFilterOption = filterOption;
    }

    openTelemetryStatisticsModal(ghost) {
        const modal: NgbModalRef = this._modalService.open(TelemetryStatisticsComponent, { size: 'lg', backdrop: 'static' });
        modal.componentInstance.ghost = ghost;
    }

    openPhotoGalleryModal(photo, name) {
        const modal: NgbModalRef = this._modalService.open(PhotoGalleryComponent, { size: 'lg', backdrop: 'static' });
        modal.componentInstance.photoURL = photo;
        modal.componentInstance.title = name;
    }

    openTimelineModal(issue) {
        const modal: NgbModalRef = this._modalService.open(TimelineComponent, { size: 'lg', backdrop: 'static'});
        modal.componentInstance.issue = issue;
    }

    openAttributeToggleConfirmationModal(event) {
        const modal: NgbModalRef = this._modalService.open(AttributeToggleConfirmationComponent,
            { size: 'sm', backdrop: 'static', centered: true });
        modal.result.then((result) => {
            const deviceObj = Object.assign({}, this.device);
            const enabledObj = {
                both: false,
                one: false,
                none: false,
                missingAttr: false,
            };
            switch (result.selectedSwitch) {
                case '700':
                case '800':
                    enabledObj.one = true;
                    break;
                case 'both':
                    if (result.doEnable) {
                        enabledObj.both = true;
                    } else {
                        enabledObj.none = true;
                    }
                    break;
            }
            deviceObj.deviceEnabledObj = enabledObj;
            this.device = deviceObj;
        }, () => {
        });
        modal.componentInstance.doEnable = event.doEnable;
        modal.componentInstance.dataIdArr = [this.device.id];
        modal.componentInstance.isCalledFromHeader = false;

    }


}
