import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class IssueService {

    constructor(private _http: HttpClient) {
    }

    /**
     * Get issues.
     * */
    getIssues(query?: any) {
        let url = environment.API_URL + `tracker/issues?perPage=0&state=open`;
        if (query) {
            url = url + '&filter=' + encodeURIComponent(query);
        }
        return this._http.get(url);
    }
}
