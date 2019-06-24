import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TelemetryStatisticsComponent} from './telemetry-statistics.component';
import {BarChartModule} from '../../shared/bar-chart/bar-chart.module';
import {LineChartModule} from '../../shared/line-chart/line-chart.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [TelemetryStatisticsComponent],
    imports: [
        CommonModule,
        NgbDropdownModule,
        BarChartModule,
        LineChartModule
    ],
    exports: [TelemetryStatisticsComponent],

})
export class TelemetryStatisticsModule {
}
