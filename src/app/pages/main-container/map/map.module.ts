import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map.component';
import {LoginComponent} from '../../login/login.component';
import {RouterModule} from '@angular/router';

const routes = [
  {path: '', component: MapComponent}
];

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [MapComponent]
})
export class MapModule {
}
