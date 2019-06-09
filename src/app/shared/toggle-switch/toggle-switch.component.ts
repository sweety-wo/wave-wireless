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
  @Input() toggled: boolean;
  @Output() toggledChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  inputId = uuid.v4();
}
