import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomMapComponent} from './custom-map.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {LeafletMarkerClusterModule} from '../../leaflet-markercluster/leaflet-markercluster.module';

@NgModule({
    declarations: [CustomMapComponent],
    imports: [
        CommonModule,
        LeafletModule,
        LeafletMarkerClusterModule,
    ],
    exports: [CustomMapComponent]
})
export class CustomMapModule {
}
