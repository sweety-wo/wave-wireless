import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import * as json2csv from 'json2csv';

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
        a.download = fileName + '.csv';
        a.click();
    }
}
