import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DeviceService} from '../../services/node/device.service';

@Component({
  selector: 'app-attribute-toggle-confirmation',
  templateUrl: './attribute-toggle-confirmation.component.html',
  styleUrls: ['./attribute-toggle-confirmation.component.scss']
})
export class AttributeToggleConfirmationComponent implements OnInit {
    doEnable: boolean;
    dataId: string;
    switchArr: any;
    selectedSwitch: string = null;

  constructor(public activeModal: NgbActiveModal,
              private _device: DeviceService) {
      this.switchArr = [{
          label: '700\'s Switch',
          value: '700'
      }, {
          label: '800\'s Switch',
          value: '800'
      }, {
          label: 'Both',
          value: 'both'
      }];
  }

  ngOnInit() {
      console.log('init modal', this.doEnable);
      console.log('init modal', this.dataId);
  }

  fnToggleAttribute() {
      console.log('called from modal', this.selectedSwitch);
      const resultObj = {
          doEnable: this.doEnable,
          switch: this.selectedSwitch,
          id: this.dataId
      };
      let tempObj = {};
      switch (this.selectedSwitch) {
          case '700':
              tempObj = {
                  name: '700_rf_switch',
                  desired: this.doEnable ? 'ON' : 'OFF'
              };
              this._device.modifyDeviceGhost(this.dataId, tempObj).subscribe((res) => {
                  this.activeModal.close(res);
              });
              break;
          case '800':
              tempObj = {
                  name: '800_rf_switch',
                  desired: this.doEnable ? 'ON' : 'OFF'
              };
              this._device.modifyDeviceGhost(this.dataId, tempObj).subscribe((res) => {
                  this.activeModal.close(res);
              });
              break;
          case 'both':
              tempObj = {
                  name: '700_rf_switch',
                  desired: this.doEnable ? 'ON' : 'OFF'
              };
              this._device.modifyDeviceGhost(this.dataId, tempObj).subscribe((res) => {
                  tempObj = {
                      name: '800_rf_switch',
                      desired: this.doEnable ? 'ON' : 'OFF'
                  };
                  this._device.modifyDeviceGhost(this.dataId, tempObj).subscribe((res1) => {
                      this.activeModal.close(res1);
                  });
              });
              break;
      }
  }

}
