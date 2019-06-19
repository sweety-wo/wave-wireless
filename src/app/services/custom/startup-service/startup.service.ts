import {Inject, Injectable, Injector} from '@angular/core';

import {AuthService} from '../auth-service/auth.service';

@Injectable({
    providedIn: 'root'
})
export class StartupService {

    constructor(private injector: Injector) {
    }

    public init(): Promise<any> {
        return new Promise((resolve: Function) => {
            // Get user data using API call after send cookie to server.
            this._getUser();
            resolve();
        });
    }

    private _getUser() {
        const auth = this.injector.get(AuthService);
        auth.fnGetAuthUser();
    }
}
