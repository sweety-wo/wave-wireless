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
    dataIdArr: any;
    isCalledFromHeader: string;
    switchArr: any;
    selectedSwitch: string = null;
    isValueChanging: boolean;
    showDisableConfirmation: boolean;

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
      this.isValueChanging = false;
      this.showDisableConfirmation = false;
  }

  ngOnInit() {
  }

  fnToggleAttribute() {
      if (this.doEnable) {
          this.fnEnableDisableSwitch();
      } else {
          this.showDisableConfirmation = true;
      }
  }

  async fnEnableDisableSwitch() {
      this.isValueChanging = true;
      const switch700Obj = {
          name: '700_rf_switch',
          desired: this.doEnable ? 'ON' : 'OFF'
      };

      const switch800Obj = {
          name: '800_rf_switch',
          desired: this.doEnable ? 'ON' : 'OFF'
      };
      const res = {
          deviceIdArr: this.dataIdArr,
          doEnable: this.doEnable,
          selectedSwitch: this.selectedSwitch
      };
      switch (this.selectedSwitch) {
          case '700':
              await Promise.all(this.dataIdArr.map(async (dataId) => {
                  await this._device.modifyDeviceGhost(dataId, switch700Obj);
              }));
              this.isValueChanging = false;
              this.activeModal.close(res);
              break;
          case '800':
              await Promise.all(this.dataIdArr.map(async (dataId) => {
                  await this._device.modifyDeviceGhost(dataId, switch800Obj);
              }));
              this.isValueChanging = false;
              this.activeModal.close(res);
              break;
          case 'both':
              await Promise.all(this.dataIdArr.map(async (dataId) => {
                  await this._device.modifyDeviceGhost(dataId, switch700Obj);
                  await this._device.modifyDeviceGhost(dataId, switch800Obj);
              }));
              this.isValueChanging = false;
              this.activeModal.close(res);
              break;
      }
  }

}
