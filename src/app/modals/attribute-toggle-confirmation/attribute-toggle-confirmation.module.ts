import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AttributeToggleConfirmationComponent} from './attribute-toggle-confirmation.component';
import {FormsModule} from '@angular/forms';
import {LoaderModule} from '../../shared/loader/loader.module';


@NgModule({
    declarations: [AttributeToggleConfirmationComponent],
    imports: [
        CommonModule,
        FormsModule,
        LoaderModule
    ],
    exports: [AttributeToggleConfirmationComponent],

})
export class AttributeToggleConfirmationModule {
}
