import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineComponent} from './timeline.component';
import {LoaderModule} from '../../shared/loader/loader.module';
import {FormsModule} from '@angular/forms';
import {LMarkdownEditorModule} from 'ngx-markdown-editor';

@NgModule({
    declarations: [TimelineComponent],
    imports: [
        CommonModule,
        LoaderModule,
        FormsModule,
        LMarkdownEditorModule
    ]
})
export class TimelineModule {
}
