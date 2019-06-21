import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailsComponent} from './details.component';
import {RouterModule} from '@angular/router';
import {ToggleSwitchModule} from '../../../shared/toggle-switch/toggle-switch.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {CustomMapModule} from '../../../shared/custom-map/custom-map.module';
import {LoaderModule} from '../../../shared/loader/loader.module';
import {FormsModule} from '@angular/forms';
import {BarChartModule} from '../../../shared/bar-chart/bar-chart.module';

const routes = [
    {path: '', component: DetailsComponent}
];

@NgModule({
    declarations: [DetailsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ToggleSwitchModule,
        NgbDropdownModule,
        AngularSvgIconModule,
        CustomMapModule,
        LoaderModule,
        FormsModule,
        BarChartModule
    ],
    exports: [DetailsComponent]
})
export class DetailsModule {
}
