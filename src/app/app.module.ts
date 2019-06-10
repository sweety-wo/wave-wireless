import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './shared/footer/footer.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {UniversalStorageService} from './services/universal-storage-service/universal-storage.service';
import {CookieModule, CookieService} from 'ngx-cookie';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {InterceptorService} from './services/interceptor-service/interceptor.service';

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
        FormlyBootstrapModule
    ],
    providers: [
        CookieService,
        {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
        UniversalStorageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
