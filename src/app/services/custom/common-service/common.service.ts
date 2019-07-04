import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import * as json2csv from 'json2csv';
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    constructor(private _http: HttpClient) {
    }

    /**
     * Get Websocket Url.
     * */
    getWebSocketUrl(topicId) {
        return this._http.post(`${environment.API_URL}node/websockets?topic=${topicId}`, null);
    }


    getHealthDetail(health) {
        let color = '';
        let title = '';
        switch (health) {
            case 500:
                color = '#fb0d1c';
                title = 'CRITICAL';
                break;
            case 300:
                color = '#fc5425';
                title = 'ATTENTION';
                break;
            case 200:
                color = '#199b8a';
                title = 'OK';
                break;
            default:
        }
        return {color, title};
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
        }
        return {centerLat, centerLong};
    }


    exportToCsv(data, fileName) {
        const csvData =
            json2csv.parse(data, {
                flatten: true
            });
        const a: any = document.createElement('a');
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        const blob = new Blob([csvData], {type: 'text/csv'});
        const url = URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName + '-' + Date.now() + '.csv';
        a.click();
    }
}
