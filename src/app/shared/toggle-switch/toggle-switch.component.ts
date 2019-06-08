import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent {
  @Input() toggled: boolean;
  @Output() toggledChange: EventEmitter<boolean> = new EventEmitter<boolean>();
}
