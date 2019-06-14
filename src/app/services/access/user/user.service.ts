import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private _http: HttpClient) {
    }



    /**
     * Get user based on id.
     * */
    getUser(userId: string) {
        return this._http.get(environment.API_URL + `access/users/${userId}`);
    }

    /**
     * Get user privileges
     * */
    getUserPrivileges() {
        return this._http.get(environment.API_URL + 'access/privileges');
    }




}
