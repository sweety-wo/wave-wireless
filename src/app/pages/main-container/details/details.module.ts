import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import {RouterModule} from '@angular/router';
import {ToggleSwitchModule} from '../../../shared/toggle-switch/toggle-switch.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {DashboardComponent} from '../dashboard/dashboard.component';

const routes = [
  {path: '', component: DetailsComponent}
];

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ToggleSwitchModule,
    NgbDropdownModule
  ],
  exports: [DetailsComponent]
})
export class DetailsModule { }
