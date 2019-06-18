import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  constructor(private _http: HttpClient) { }

    /**
     * Get gateways.
     * */
    getGateways(query) {
        let url = environment.API_URL + `node/gateways?perPage=0`;
        if (query) {
            url = url + '&filter=' + encodeURIComponent(query);
        }
        return this._http.get(url);
    }
}
