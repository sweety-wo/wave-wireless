import {Injectable} from '@angular/core';
import * as toastr from 'toastr';

@Injectable({providedIn: 'root'})
export class ToastrService {

    constructor() {
        toastr.options = {
            'closeButton': false,
            'debug': false,
            'newestOnTop': true,
            'progressBar': true,
            'positionClass': 'toast-bottom-right',
            'preventDuplicates': true,
            'onclick': null,
            'showDuration': '300',
            'hideDuration': '1000',
            'timeOut': '3000',
            'extendedTimeOut': '1000',
            'showEasing': 'swing',
            'hideEasing': 'linear',
            'showMethod': 'fadeIn',
            'hideMethod': 'fadeOut'
        };
    }

    /**
     * Success message
     * @param {string} message
     * @param {string} title
     * @param {any} options - Override global options
     * */
    success(message: string, title?: string, options?: any) {
        toastr.success(message, title, options);
    }

    /**
     * Info message
     * @param {string} message
     * @param {string} title
     * @param {any} options - Override global options
     * */
    info(message: string, title?: string, options?: any) {
        toastr.info(message, title, options);
    }

    /**
     * Warning message
     * @param {string} message
     * @param {string} title
     * @param {any} options - Override global options
     * */
    warning(message: string, title?: string, options?: any) {
        toastr.warning(message, title, options);
    }

    /**
     * Error message
     * @param {string} message
     * @param {string} title
     * @param {any} options - Override global options
     * */
    error(message: string, title?: string, options?: any) {
        toastr.error(message, title, options);
    }
}
