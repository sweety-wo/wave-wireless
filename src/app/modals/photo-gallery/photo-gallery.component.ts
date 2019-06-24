import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-photo-gallery',
    templateUrl: './photo-gallery.component.html',
    styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {
    @Input() photoURL: string;
    @Input() title: string;

    constructor(public activeModal: NgbActiveModal) {
    }

    ngOnInit() {
    }

}
