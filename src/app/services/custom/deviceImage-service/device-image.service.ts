import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeviceImageService {

  constructor(private _http: HttpClient) { }

    /**
     * Get Device Image.
     * */
    getDeviceImage(path?: any) {
        const url = environment.API_URL + `storage/files?path=${path}`;
        return this._http.get(url);
    }
}
