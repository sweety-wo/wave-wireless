import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie';

@Injectable()
export class UniversalStorageService implements Storage {

    [index: number]: string;

    [key: string]: any;

    length: number;
    cookies: any;

    constructor(private cookieService: CookieService) {
    }

    public clear(): void {
        this.cookieService.removeAll();
    }

    public getItem(key: string): string {
        return this.cookieService.get(key);
    }

    public key(index: number): string {
        return this.cookieService.getAll().propertyIsEnumerable[index];
    }

    public removeItem(key: string): void {
        this.cookieService.remove(key);
    }

    public setItem(key: string, data: string): void {
        this.cookieService.put(key, data);
    }
}
