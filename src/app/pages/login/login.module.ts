import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {RouterModule} from '@angular/router';
import {LoaderModule} from '../../shared/loader/loader.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SecurityService} from '../../services/access';
import {FormlyModule} from '@ngx-formly/core';

const routes = [
    {path: '', component: LoginComponent}
];

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LoaderModule,
        FormsModule,
        ReactiveFormsModule,
        FormlyModule
    ],
    providers: [SecurityService],
})
export class LoginModule {
}

