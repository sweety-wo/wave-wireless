import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map.component';
import {RouterModule} from '@angular/router';
import {SearchBarModule} from '../../../shared/search-bar/search-bar.module';
import {CustomMapModule} from '../../../shared/custom-map/custom-map.module';
import {LoaderModule} from '../../../shared/loader/loader.module';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {PieChartModule} from '../../../shared/pie-chart/pie-chart.module';

const routes = [
    {path: '', component: MapComponent}
];

@NgModule({
    declarations: [MapComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LoaderModule,
        SearchBarModule,
        CustomMapModule,
        AngularSvgIconModule,
        PieChartModule
    ],
    exports: [MapComponent]
})
export class MapModule {
}
