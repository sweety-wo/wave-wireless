import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import * as moment from 'moment';

import {IssueService} from '../../services/tracker/issue/issue.service';


@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
    @Input() issue: any;

    isCommentLoading =  true;
    comments: any;
    totalComments: number;
    firstComment: any;
    lastComment: any;
    isCommentSectionClicked = false;

    constructor(public activeModal: NgbActiveModal,
                private _issue: IssueService) {
    }

    ngOnInit() {
        if (this.issue && this.issue.id) {
            this._issue.getIssueComments(this.issue.id).subscribe((response: any) => {
                this.isCommentLoading = false;
                if (response && response.length) {
                    _.forEach(response, (comment) => {
                        comment.humanDateCreated = moment.unix(comment.created).format('MM/DD/YYYY HH:mm:ss');
                        comment.createdAt = moment(comment.humanDateCreated).fromNow();
                        comment.isDetailClicked = false;
                        comment.humanDateLastUpdated = moment.unix(comment.lastUpdated).format('MM/DD/YYYY HH:mm:ss');
                        if (comment.body) {
                            comment.mdBody = atob(comment.body);
                        }
                    });
                    this.comments = _.sortBy(response, o => {
                        return  moment(o.humanDateCreated);
                    });
                    this.firstComment = this.comments.shift();
                    this.lastComment = this.comments.pop();
                    this.totalComments = this.comments.length;
                }
            });
        }
    }

    getIssuesLabelColor(label) {
        if (label.color) {
            return {
                'background-color': label.color,
            };
        }
    }
}
