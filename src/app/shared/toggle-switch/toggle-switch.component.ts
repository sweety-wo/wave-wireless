import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent {
  @Input() size = 'medium';
  @Input() theme = 'dark';
  @Input() type: string;
  @Input() key: string;

  @Input() dataArr: any = [];
  @Output() dataArrChange: EventEmitter<boolean> = new EventEmitter<any>();

  @Input() toggled: boolean;
  @Output() toggledChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  inputId = uuid.v4();

  checkAll(event?) {
    this.dataArr.forEach(x => x[this.key] = event.target.checked);
    this.toggled = event.target.checked;
    this.toggledChange.emit(this.toggled);
    this.dataArrChange.emit(this.dataArr);
  }

  isAllChecked() {
    const isTrue = this.dataArr.every(o => o[this.key]);
    this.dataArrChange.emit(this.dataArr);
    return isTrue;
  }
}
