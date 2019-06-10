import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './shared/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {UniversalStorageService} from './universal-storage-service/universal-storage.service';
import {CookieModule, CookieService} from 'ngx-cookie';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CookieModule.forRoot(),
        LeafletModule.forRoot(),
        FormlyModule.forRoot(),
        FormlyBootstrapModule,
    ],
    providers: [
        CookieService,
        UniversalStorageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
