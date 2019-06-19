import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LabelService {

    constructor(private _http: HttpClient) {
    }

    /**
     * Get labels.
     * */
    getLabels() {
        return this._http.get(environment.API_URL + `tracker/labels?perPage=0`);
    }
}
