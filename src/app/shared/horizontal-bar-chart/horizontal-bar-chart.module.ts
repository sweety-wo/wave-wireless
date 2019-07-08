import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HorizontalBarChartComponent} from './horizontal-bar-chart.component';

@NgModule({
    declarations: [HorizontalBarChartComponent],
    imports: [
        CommonModule
    ],
    exports: [HorizontalBarChartComponent]
})
export class HorizontalBarChartModule {
}
