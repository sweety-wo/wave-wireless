import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AttributeToggleConfirmationComponent} from './attribute-toggle-confirmation.component';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [AttributeToggleConfirmationComponent],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [AttributeToggleConfirmationComponent],

})
export class AttributeToggleConfirmationModule {
}
