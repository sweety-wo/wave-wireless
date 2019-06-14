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
    getDevices() {
        return this._http.get(environment.API_URL + `node/devices?perPage=0`);
    }
}
