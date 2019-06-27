import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import * as moment from 'moment';

import {IssueService} from '../../services/tracker/issue/issue.service';
import {MdEditorOption} from 'ngx-markdown-editor';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
    @ViewChild('commentInput', {static: false}) commentInput: ElementRef;
    @Input() issue: any;

    isCommentLoading = true;
    comments: any;
    totalComments: number;
    firstComment: any;
    lastComment: any;
    isCommentSectionClicked = false;
    public options: MdEditorOption = {
        enablePreviewContentClick: true
    };

    constructor(public activeModal: NgbActiveModal,
                private _issue: IssueService) {
    }

    ngOnInit() {
        if (this.issue && this.issue.id) {
            this.getIssueComments();
        }
    }

    getIssueComments() {
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
                    if (comment.mdBody.includes('<!actionLabels!>')) {
                        comment.commentHasLabels = true;
                        const lblDetails = comment.mdBody.split('!>')[1];
                        const commentLabelArr = lblDetails.split(' !');
                        if (commentLabelArr.length) {
                            comment.commentLblsArr = [];
                            _.forEach(commentLabelArr,  commentLabel => {
                                if (commentLabel.includes(':')) {
                                    const inputObj = {
                                        title: commentLabel.split(':')[0],
                                        color: commentLabel.split(':')[1]
                                    };
                                    comment.commentLblsArr.push(inputObj);
                                } else {
                                    comment.mdBody = commentLabel;
                                }
                            });
                        }
                    } else if (comment.mdBody.includes('<!action!>')) {
                        comment.commentHasAssignees = true;
                        comment.mdBody = comment.mdBody.split('!>')[1] /*+ ' ' + resObj.humanDateCreatedRelative*/;
                    }  else if (comment.mdBody.includes('<!actionParticipant!>')) {
                        comment.commentHasParticipants = true;
                        comment.mdBody = comment.mdBody.split('!>')[1];
                    } else {
                        comment.commentHasParticipants = false;
                        comment.commentHasLabels = false;
                        comment.commentHasAssignees = false;
                    }
                });
                this.comments = _.sortBy(response, o => {
                    return moment(o.humanDateCreated);
                });
                this.firstComment = this.comments.shift();
                this.lastComment = this.comments.pop();
                this.totalComments = this.comments.length;
            }
        });
    }

    checkComment(commentType) {
        return commentType.commentHasLabels !== true &&
            commentType.commentHasParticipants !== true && commentType.commentHasAssignees !== true;
    }

    addComment() {
        if (this.commentInput.nativeElement.value) {
            this._issue.createIssueComment(this.issue.id, btoa(this.commentInput.nativeElement.value))
                .subscribe(() => {
                    this.commentInput.nativeElement.value = '';
                    this.isCommentLoading = true;
                    this.getIssueComments();
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
