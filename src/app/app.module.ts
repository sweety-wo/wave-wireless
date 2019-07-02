import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {CookieModule, CookieService} from 'ngx-cookie';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './shared/footer/footer.component';
import {UniversalStorageService} from './services/custom/universal-storage-service/universal-storage.service';
import {InterceptorService} from './services/custom/interceptor-service/interceptor.service';
import {NotAuthGuardService} from './services/custom/not-auth-guard-service/not-auth-guard.service';
import {AuthGuardService} from './services/custom/auth-guard-service/auth-guard.service';
import {StartupService} from './services/custom/startup-service/startup.service';
import {TelemetryStatisticsComponent} from './modals/telemetry-statistics/telemetry-statistics.component';
import {TelemetryStatisticsModule} from './modals/telemetry-statistics/telemetry-statistics.module';
import {PhotoGalleryComponent} from './modals/photo-gallery/photo-gallery.component';
import {PhotoGalleryModule} from './modals/photo-gallery/photo-gallery.module';
import {TimelineComponent} from './modals/timeline/timeline.component';
import {TimelineModule} from './modals/timeline/timeline.module';
import { AttributeToggleConfirmationComponent } from './modals/attribute-toggle-confirmation/attribute-toggle-confirmation.component';
import {AttributeToggleConfirmationModule} from './modals/attribute-toggle-confirmation/attribute-toggle-confirmation.module';
import { SelectClustersModalComponent } from './modals/select-clusters-modal/select-clusters-modal.component';
import {SelectClustersModalModule} from './modals/select-clusters-modal/select-clusters-modal.module';

export function init(startup: StartupService): Function {
    return (): Promise<any> => startup.init();
}

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        PhotoGalleryComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CookieModule.forRoot(),
        LeafletModule.forRoot(),
        FormlyModule.forRoot(),
        NgbModule,
        FormlyBootstrapModule,
        TelemetryStatisticsModule,
        PhotoGalleryModule,
        TimelineModule,
        AttributeToggleConfirmationModule,
        SelectClustersModalModule
    ],
    providers: [
        CookieService,
        {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
        {provide: APP_INITIALIZER, useFactory: init, multi: true, deps: [StartupService]},
        UniversalStorageService,
        AuthGuardService,
        NotAuthGuardService
    ],
    entryComponents: [TelemetryStatisticsComponent,
        PhotoGalleryComponent, TimelineComponent,
        AttributeToggleConfirmationComponent, SelectClustersModalComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
