import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {CookieModule, CookieService} from 'ngx-cookie';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './shared/footer/footer.component';
import {UniversalStorageService} from './services/universal-storage-service/universal-storage.service';
import {InterceptorService} from './services/interceptor-service/interceptor.service';
import {NotAuthGuardService} from './services/not-auth-guard-service/not-auth-guard.service';
import {AuthGuardService} from './services/auth-guard-service/auth-guard.service';
import {StartupService} from './services/startup-service/startup.service';

export function init(startup: StartupService): Function {
    return (): Promise<any> => startup.init();
}

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
        {provide: APP_INITIALIZER, useFactory: init, multi: true, deps: [StartupService]},
        UniversalStorageService,
        AuthGuardService,
        NotAuthGuardService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
