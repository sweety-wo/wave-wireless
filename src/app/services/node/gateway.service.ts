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
    getGateways(query?: any) {
        let url = environment.API_URL + `node/gateways?perPage=0`;
        if (query) {
            url = url + '&filter=' + encodeURIComponent(query);
        }
        return this._http.get(url);
    }

    /**
     * Get gateway by id.
     * */
    getGateway(gatewayId) {
        return this._http.get(environment.API_URL + `node/gateways/${gatewayId}`);
    }

}
