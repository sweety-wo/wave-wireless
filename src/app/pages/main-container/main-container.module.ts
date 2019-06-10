import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainContainerComponent} from './main-container.component';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from '../../shared/navbar/navbar.component';
import {AngularSvgIconModule} from 'angular-svg-icon';

const routes = [
    {
        path: '', component: MainContainerComponent,
        children: [
            {path: '', loadChildren: './map/map.module#MapModule'},
            {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
            {path: 'details', loadChildren: './details/details.module#DetailsModule'}
        ]
    }
];

@NgModule({
    declarations: [MainContainerComponent, NavbarComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        AngularSvgIconModule
    ]
})
export class MainContainerModule {
}
