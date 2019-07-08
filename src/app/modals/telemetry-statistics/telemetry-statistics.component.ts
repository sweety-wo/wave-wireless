import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DropdownOptions} from '../../constant/dropdown-options';


@Component({
    selector: 'app-telemetry-statistics',
    templateUrl: './telemetry-statistics.component.html',
    styleUrls: ['./telemetry-statistics.component.scss']
})
export class TelemetryStatisticsComponent implements OnInit {
    @Input() ghost: any;
    alarmNameMappingOptions: any;
    chartFilterOptions: any = [];
    selectedChartFilterOption: any = {};

    constructor(public activeModal: NgbActiveModal) {
        this.alarmNameMappingOptions = DropdownOptions.alarmOptions;
        this.chartFilterOptions = DropdownOptions.chartFilterOptions;
        this.selectedChartFilterOption = this.chartFilterOptions[0];
    }

    ngOnInit() {
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

    fnSelectFilterOption(filterOption) {
        this.selectedChartFilterOption = filterOption;
    }


}
