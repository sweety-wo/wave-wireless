import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-select-clusters-modal',
  templateUrl: './select-clusters-modal.component.html',
  styleUrls: ['./select-clusters-modal.component.scss']
})
export class SelectClustersModalComponent implements OnInit {
    clustersArr: any;
    isValueChanging: any;
  constructor(public activeModal: NgbActiveModal) {
      this.isValueChanging = false;
  }

  ngOnInit() {
  }

}
