import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AccountService } from './api/account.service';
import { ApiKeyService } from './api/apiKey.service';
import { AuthenticatorService } from './api/authenticator.service';
import { ContactService } from './api/contact.service';
import { FederationService } from './api/federation.service';
import { GroupService } from './api/group.service';
import { LogService } from './api/log.service';
import { RoleService } from './api/role.service';
import { SecurityService } from './api/security.service';
import { UserService } from './api/user.service';
import { VaultService } from './api/vault.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AccountService,
    ApiKeyService,
    AuthenticatorService,
    ContactService,
    FederationService,
    GroupService,
    LogService,
    RoleService,
    SecurityService,
    UserService,
    VaultService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
