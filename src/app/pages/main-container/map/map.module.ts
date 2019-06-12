import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map.component';
import {RouterModule} from '@angular/router';
import {SearchBarModule} from '../../../shared/search-bar/search-bar.module';
import {CustomMapModule} from '../../../shared/custom-map/custom-map.module';

const routes = [
    {path: '', component: MapComponent}
];

@NgModule({
    declarations: [MapComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SearchBarModule,
        CustomMapModule
    ],
    exports: [MapComponent]
})
export class MapModule {
}
