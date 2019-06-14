import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsComponent} from './settings.component';
import {RouterModule} from '@angular/router';

const routes = [
    {path: '', component: SettingsComponent}
];

@NgModule({
    declarations: [SettingsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [SettingsComponent]
})
export class SettingsModule {
}
