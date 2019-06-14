import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomMapComponent} from './custom-map.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {LeafletMarkerClusterModule} from '../../leaflet-markercluster/leaflet-markercluster.module';
import {RouterModule} from '@angular/router';
import {AngularSvgIconModule} from 'angular-svg-icon';

@NgModule({
    declarations: [CustomMapComponent],
    imports: [
        CommonModule,
        LeafletModule,
        RouterModule,
        LeafletMarkerClusterModule,
        AngularSvgIconModule
    ],
    exports: [CustomMapComponent]
})
export class CustomMapModule {
}
