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
    getDevices(query?: any) {
        let url = environment.API_URL + `node/devices?perPage=0`;
        if (query) {
            url = url + '&filter=' + encodeURIComponent(query);
        }
        return this._http.get(url);
    }

    /**
     * Get device by id.
     * */
    getDevice(deviceId) {
        return this._http.get(environment.API_URL + `node/devices/${deviceId}`);
    }

    /**
     * Get device ghost.
     * */
    getDeviceGhosts(deviceId) {
        return this._http.get(environment.API_URL + `node/devices/${deviceId}/ghosts`);
    }

    /**
     * modify device ghost.
     * */
    async modifyDeviceGhost(deviceId, payload): Promise<any> {
        const url = environment.API_URL + `node/devices/${deviceId}/ghosts`;
        return await this._http.patch(url, payload).toPromise()
            .then(async (response: any) => {
                return response;
            })
            .catch(async (error) => {
            });
    }


}
