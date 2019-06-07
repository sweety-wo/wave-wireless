import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainContainerComponent} from './main-container.component';
import {LoginComponent} from '../login/login.component';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from '../../shared/navbar/navbar.component';

const routes = [
  {
    path: '', component: MainContainerComponent,
    children: [
      {
        path: '', loadChildren: './map/map.module#MapModule'
      }
    ]
  }

];

@NgModule({
  declarations: [MainContainerComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainContainerModule {
}
