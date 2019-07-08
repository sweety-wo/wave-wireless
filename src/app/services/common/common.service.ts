import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

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
}
