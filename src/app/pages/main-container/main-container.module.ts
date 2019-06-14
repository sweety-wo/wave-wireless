import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainContainerComponent} from './main-container.component';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from '../../shared/navbar/navbar.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {AuthGuardService} from '../../services/auth-guard-service/auth-guard.service';

const routes = [
    {
        path: '', component: MainContainerComponent,
        children: [
            {path: 'map', loadChildren: './map/map.module#MapModule'},
            {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            {path: 'details', loadChildren: './details/details.module#DetailsModule'},
            {path: 'settings', loadChildren: './settings/settings.module#SettingsModule'},
        ]
    }
];

@NgModule({
    declarations: [MainContainerComponent, NavbarComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        AngularSvgIconModule
    ],
    providers: [AuthGuardService]
})
export class MainContainerModule {
}
