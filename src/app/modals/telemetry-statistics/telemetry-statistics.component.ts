import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-telemetry-statistics',
    templateUrl: './telemetry-statistics.component.html',
    styleUrls: ['./telemetry-statistics.component.scss']
})
export class TelemetryStatisticsComponent implements OnInit {
    @Input() ghost: any;

    constructor(public activeModal: NgbActiveModal) {
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


}
