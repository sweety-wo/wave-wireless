import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject, Subject} from 'rxjs';
import {UniversalStorageService} from '../universal-storage-service/universal-storage.service';
import {UserService} from '../access/user/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public static COOKIE_NAME = 'wave-wireless';
    public loggedInUser: Subject<any> = new BehaviorSubject<any>(null);
    private _loggedInUser: any = null;

    constructor(private _router: Router,
                private _cookies: UniversalStorageService,
                private _user: UserService) {
    }

    public fnGetAuthUser() {
        if (this.fnGetToken()) {
            const userId = this._cookies.getItem('xContextId');
            this._user.getUser(userId).subscribe((user) => {
                this.loggedInUser.next(user);
                this._loggedInUser = user;
            });
        }
    }

    /**
     * Get auth token
     * */
    fnGetToken(): any {
        const getCookie = this._cookies.getItem(AuthService.COOKIE_NAME);
        // HERE: Path condition  for universal because it get cookie if not available at client side.
        if (getCookie && getCookie.indexOf('path') === -1) {
            return getCookie;
        } else {
            return null;
        }

    }

    /**
     * Set auth token
     * @param {string} authToken
     * */
    fnSetToken(authToken: string) {
        this._cookies.setItem(AuthService.COOKIE_NAME, authToken);
    }

    /**
     * Remoove auth token
     * */
    fnRemoveToken() {
        this._loggedInUser = null;
        this.loggedInUser.next(null);
        this._cookies.removeItem(AuthService.COOKIE_NAME);
        this._cookies.removeItem('xContextId');
    }

    /**
     * Get auth token
     * */
    fnRemoveCookieToken() {
        this._loggedInUser = null;
        this._cookies.removeItem(AuthService.COOKIE_NAME);
    }

    /**
     * Get logged user data
     * */
    fnGetLoggedUser(): any {
        return this._loggedInUser;
    }
}
