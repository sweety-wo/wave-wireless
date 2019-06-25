import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {NgbAccordionModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {FormsModule} from '@angular/forms';
import {LoaderModule} from '../../../shared/loader/loader.module';
import {CustomMapModule} from '../../../shared/custom-map/custom-map.module';
import {BtnGroupToggleModule} from '../../../shared/btn-group-toggle/btn-group-toggle.module';
import {AttributeToggleConfirmationModule} from '../../../modals/attribute-toggle-confirmation/attribute-toggle-confirmation.module';

const routes = [
    {path: '', component: DashboardComponent}
];

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        LoaderModule,
        CustomMapModule,
        BtnGroupToggleModule,
        NgbDropdownModule,
        NgbAccordionModule,
        AngularSvgIconModule,
        AttributeToggleConfirmationModule
    ],
    exports: [DashboardComponent]
})
export class DashboardModule {
}
