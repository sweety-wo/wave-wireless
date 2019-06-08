import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {ToggleSwitchModule} from '../../../shared/toggle-switch/toggle-switch.module';
import {NgbAccordionModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularSvgIconModule} from 'angular-svg-icon';

const routes = [
  {path: '', component: DashboardComponent}
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ToggleSwitchModule,
    NgbDropdownModule,
    NgbAccordionModule,
    AngularSvgIconModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule {
}
