import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DeviceImageService {

    constructor(private _http: HttpClient) {
    }

    /**
     * Get Device Image.
     * */
    async getDeviceImage(path?: any): Promise<any> {
        const url = environment.API_URL + `storage/files?path=${path}`;
        return await this._http.get(url).toPromise()
            .then(async (response: any) => {
                return response.url;
            })
            .catch(async (error) => {
            });
    }
}
