import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

    constructor(private _http: HttpClient) {
    }



    /**
     * Get devices.
     * */
    getDevices(query) {
        let url = environment.API_URL + `node/devices?perPage=0`;
        if (query) {
            url = url + '&filter=' + encodeURIComponent(query);
        }
        return this._http.get(url);
    }
}
