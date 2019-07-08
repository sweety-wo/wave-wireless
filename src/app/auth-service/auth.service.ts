import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject, Subject} from 'rxjs';
import {UniversalStorageService} from '../universal-storage-service/universal-storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public static COOKIE_NAME = 'wave-wireless';
    public loggedInUser: Subject<any> = new BehaviorSubject<any>(null);
    private _loggedInUser: any = null;

    constructor(private _router: Router,
                private cookies: UniversalStorageService) {
    }

    /**
     * Checked logged in user information
     * */
    public fnCheckLoggedUserInfo(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.fnGetToken()) {
            }
        });
    }

    /**
     * Get auth token
     * */
    fnGetToken(): any {
        const getCookie = this.cookies.getItem(AuthService.COOKIE_NAME);
        // HERE: Path condition  for universal because it get cookie if not available at client side.
        if (getCookie && getCookie.indexOf('path') === -1) {
            return getCookie;
        } else {
            return null;
        }

    }

    /**
     * Get auth token
     * @param {string} authToken
     * */
    fnSetToken(authToken: string) {
        this.cookies.setItem(AuthService.COOKIE_NAME, authToken);
    }

    /**
     * Get auth token
     * */
    fnRemoveToken() {
        this._loggedInUser = null;
        this.loggedInUser.next(null);
        this.cookies.removeItem(AuthService.COOKIE_NAME);
    }

    /**
     * Get auth token
     * */
    fnRemoveCookieToken() {
        this._loggedInUser = null;
        this.cookies.removeItem(AuthService.COOKIE_NAME);
    }

    /**
     * Get logged user data
     * */
    fnGetLoggedUser(): any {
        return this._loggedInUser;
    }
}
