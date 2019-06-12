import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchBarComponent} from './search-bar.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularSvgIconModule} from 'angular-svg-icon';

@NgModule({
    declarations: [SearchBarComponent],
    imports: [
        CommonModule,
        NgbDropdownModule,
        AngularSvgIconModule
    ],
    exports : [SearchBarComponent]
})
export class SearchBarModule {
}
