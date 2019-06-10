import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class SecurityService {

    constructor(private _http: HttpClient) {
    }



    /**
     * Get authentication parameters based on id.
     * */
    getAuthenticationParameters(type: string, identifier: string) {
        return this._http.get(environment.API_URL + 'sessions?type=' + type + '&identifier=' + identifier);
    }

    createSession(type, identifier, payload) {
        return this._http.post(environment.API_URL + 'sessions?type=' + type + '&identifier=' + identifier, payload);
    }





}
