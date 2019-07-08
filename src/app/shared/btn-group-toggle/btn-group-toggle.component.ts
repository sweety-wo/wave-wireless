import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'app-btn-group-toggle',
  templateUrl: './btn-group-toggle.component.html',
  styleUrls: ['./btn-group-toggle.component.scss']
})
export class BtnGroupToggleComponent implements OnChanges {
    @Input() type: string;

    @Input() dataObj: any = {};
    @Input() addBackground: boolean;
    @Output() toggledChange: EventEmitter<any> = new EventEmitter<any>();

    btnGroupArr: any = [];
    attributeToggleOptions: any = [];
    selectedIndex: number;

  constructor() {
      this.btnGroupArr = [{
          fieldTitle: 'ON',
          fieldValue: true,
          fieldTooltip: 'Enable amp',
          itemIndex: 1
      }, /*{
          fieldTitle: '700/800',
          fieldValue: null,
          itemIndex: 2
      }, */{
          fieldTitle: 'OFF',
          fieldValue: false,
          fieldTooltip: 'Disable amp',
          itemIndex: 2
      }];

      this.attributeToggleOptions = [{
          fieldTitle: 'ON',
          fieldValue: true,
          fieldTooltip: 'Enable amp of selected devices',
          itemIndex: 1
      }, {
          fieldTitle: 'OFF',
          fieldValue: false,
          fieldTooltip: 'Disable amp of selected devices',
          itemIndex: 2
      }];
  }

  ngOnChanges() {
      if (this.type !== 'header') {
          if (this.dataObj.deviceEnabledObj.both) {
              this.selectedIndex = 1;
          } else if (this.dataObj.deviceEnabledObj.none) {
              this.selectedIndex = 2;
          } else {
              this.selectedIndex = 3;
          }
      }
  }

  fnToggle(btnGroupObj) {
      if (btnGroupObj.fieldValue !== null && this.selectedIndex !== btnGroupObj.itemIndex) {
          this.toggledChange.emit({doEnable: btnGroupObj.fieldValue, dataObj: this.dataObj, isCalledFromHeader: false});
      }
  }

  fnToggleHeader(doEnable) {
      this.toggledChange.emit({doEnable: doEnable, dataObj: {}, isCalledFromHeader: true});
  }

}
