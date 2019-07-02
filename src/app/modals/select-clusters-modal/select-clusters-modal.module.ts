import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LoaderModule} from '../../shared/loader/loader.module';
import {SelectClustersModalComponent} from './select-clusters-modal.component';


@NgModule({
    declarations: [SelectClustersModalComponent],
    imports: [
        CommonModule,
        FormsModule,
        LoaderModule
    ],
    exports: [SelectClustersModalComponent],

})
export class SelectClustersModalModule {
}
