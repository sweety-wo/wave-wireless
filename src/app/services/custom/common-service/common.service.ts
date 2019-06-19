import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http: HttpClient) { }

    /**
     * Get Websocket Url.
     * */
    getWebSocketUrl(topicId) {
        return this._http.post(`${environment.API_URL}node/websockets?topic=${topicId}`, null);
    }

    setLatLng(data) {
        let centerLat;
        let centerLong;
        if (data && data.length) {
            _.forEach(data, (o) => {
                if (o.data && o.data.lat && o.data.long && o.data.long[0] && o.data.lat[0]) {
                    centerLat = o.data.lat[0];
                    centerLong = o.data.long[0];
                    if (centerLat && centerLong) {
                        return false;
                    }
                }
            });
        } else {
            centerLat = 38.89511;
            centerLong = -77.03637;
        }
        return {centerLat, centerLong};
    }
}
