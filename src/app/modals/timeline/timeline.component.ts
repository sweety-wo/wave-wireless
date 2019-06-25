import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
    @Input() issue: any;

    constructor(public activeModal: NgbActiveModal) {
    }

    ngOnInit() {
    }

    getIssuesLabelColor(label) {
        if (label.color) {
            return {
                'background-color': label.color,
            };
        }
    }
}
