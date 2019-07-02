import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailsComponent} from './details.component';
import {RouterModule} from '@angular/router';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {CustomMapModule} from '../../../shared/custom-map/custom-map.module';
import {LoaderModule} from '../../../shared/loader/loader.module';
import {FormsModule} from '@angular/forms';
import {BarChartModule} from '../../../shared/bar-chart/bar-chart.module';
import {TelemetryStatisticsModule} from '../../../modals/telemetry-statistics/telemetry-statistics.module';
import {PhotoGalleryModule} from '../../../modals/photo-gallery/photo-gallery.module';
import {TimelineModule} from '../../../modals/timeline/timeline.module';
import {AttributeToggleConfirmationModule} from '../../../modals/attribute-toggle-confirmation/attribute-toggle-confirmation.module';
import {BtnGroupToggleModule} from '../../../shared/btn-group-toggle/btn-group-toggle.module';

const routes = [
    {path: '', component: DetailsComponent}
];

@NgModule({
    declarations: [DetailsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgbDropdownModule,
        AngularSvgIconModule,
        CustomMapModule,
        LoaderModule,
        FormsModule,
        BarChartModule,
        TelemetryStatisticsModule,
        PhotoGalleryModule,
        TimelineModule,
        AttributeToggleConfirmationModule,
        BtnGroupToggleModule
    ],
    exports: [DetailsComponent]
})
export class DetailsModule {
}
