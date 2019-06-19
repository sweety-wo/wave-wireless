import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClusterService {

  constructor(private _http: HttpClient) { }

    /**
     * Get clusters.
     * */
    getClusters(query?: any) {
        let url = environment.API_URL + `node/clusters?perPage=0`;
        if (query) {
            url = url + '&filter=' + encodeURIComponent(query);
        }
        return this._http.get(url);
    }
}
