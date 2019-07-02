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
    async getDeviceGhosts(deviceId): Promise<any> {
        const url = environment.API_URL + `node/devices/${deviceId}/ghosts`;
        return await this._http.get(url, {}).toPromise()
            .then(async (response: any) => {
                return response;
            })
            .catch(async (error) => {
            });
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

    /**
     * Add device to cluster.
     * */
    async addDeviceToCluster(deviceId, clusterId): Promise<any> {
        const url = environment.API_URL + `node/clusters/${clusterId}/devices/${deviceId}`;
        return await this._http.put(url, {}).toPromise()
            .then(async (response: any) => {
                return response;
            })
            .catch(async (error) => {
            });
    }

    /**
     * Remove device from cluster.
     * */
    async removeDeviceFromCluster(deviceId, clusterId): Promise<any> {
        const url = environment.API_URL + `node/clusters/${clusterId}/devices/${deviceId}`;
        return await this._http.delete(url).toPromise()
            .then(async (response: any) => {
                return response;
            })
            .catch(async (error) => {
            });
    }


}
