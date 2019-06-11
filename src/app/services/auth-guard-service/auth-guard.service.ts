import {Injectable, Injector, OnDestroy} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

import {Observable, Subject, Subscription} from 'rxjs';


import {AuthService} from '../auth-service/auth.service';


@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private _router: Router,
                private _injector: Injector,
                private _auth: AuthService) {
    }

    /**
     * check Activate.
     * @param {object} next
     * @param {object} state
     */
    public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const url: string = state.url;
        return this.fnCheckAuthenticate(next, url);
    }

    /**
     * check Authenticate.
     * @param {string} url
     */
    private fnCheckAuthenticate(next, url: string): Promise<boolean> | boolean {
        return new Promise((resolve, reject) => {

            // Check if token is available or not for accessing auth routing otherwise redirect to login page.
            if (!this._auth.fnGetToken()) {
                this._router.navigate(['login']);
                reject(false);
            }
            resolve(true);
        });
    }
}

