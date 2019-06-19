import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {AuthService} from '../auth-service/auth.service';

@Injectable()
export class NotAuthGuardService implements CanActivate {
    constructor(private _router: Router,
                private _auth: AuthService) {
    }

    /**
     * check Activate.
     * @param {object} route
     * @param {object} state
     */
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const url: string = state.url;
        return this.fnCheckAuthenticate(url);
    }

    /**
     * check Authenticate.
     * @param {string} url
     */
    private fnCheckAuthenticate(url: string): Promise<boolean> | boolean {
        return new Promise((resolve, reject) => {
            if (!this._auth.fnGetToken()) {
                resolve(true);
            } else {
                this._router.navigate(['/map']);
                reject(false);
            }
        });
    }
}

