import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map.component';
import {RouterModule} from '@angular/router';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {LeafletMarkerClusterModule} from '../../../leaflet-markercluster/leaflet-markercluster.module';
import {SearchBarModule} from '../../../shared/search-bar/search-bar.module';

const routes = [
    {path: '', component: MapComponent}
];

@NgModule({
    declarations: [MapComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LeafletModule,
        LeafletMarkerClusterModule,
        SearchBarModule,
    ],
    exports: [MapComponent]
})
export class MapModule {
}
