import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsComponent} from './settings.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {LoaderModule} from '../../../shared/loader/loader.module';

const routes = [
    {path: '', component: SettingsComponent}
];

@NgModule({
    declarations: [SettingsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        FormlyModule,
        LoaderModule
    ],
    exports: [SettingsComponent]
})
export class SettingsModule {
}
