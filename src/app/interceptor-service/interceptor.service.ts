import {Injectable} from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
    HttpResponse
} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

import {AuthService} from '../auth-service/auth.service';
import {environment} from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

    constructor(private _router: Router,
                private _auth: AuthService) {
    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this._auth.fnGetToken() && !request.headers.has('Authorization')) {
            if (request.url.startsWith(environment.API_URL)) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${this._auth.fnGetToken()}`
                    }
                });
            }
        }
        return next.handle(request).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event', event);
                    // do stuff with response if you want
                }
            }, (error: any) => {
                if (error instanceof HttpErrorResponse) {
                    switch (error.status) {
                        case 401:
                            console.error('STATUS CODE :: 401 =>', error.error);
                            this._auth.fnRemoveToken();
                            this._router.navigate(['/login']);
                            break;
                        case 403:
                            console.error('STATUS CODE :: 403 =>', error.error);
                            if (this._router.url !== '/login') {

                            }
                            this._router.navigate(['/login']);
                            break;
                        default:
                        // console.error('InterceptorService => ', error.status);
                    }
                }
            })
        );
    }
}
