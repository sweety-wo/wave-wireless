import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SecurityService} from '../../services/access';

import * as _ from 'lodash';
import {AuthService} from '../../auth-service/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    isSecurityMode: boolean;
    loginForm: FormGroup;
    form: FormGroup;
    payloadObj: any;
    isLoading: boolean;
    fieldsArray: any[];
    model: any = {};

    constructor(private _formBuilder: FormBuilder,
                private _security: SecurityService,
                private _auth: AuthService) {
        this.isSecurityMode = false;
        this.isLoading = false;
        this.fieldsArray = [];
    }

    ngOnInit() {
        this.fnCreateForm();
    }


    private fnCreateForm() {
        this.loginForm = this._formBuilder.group({
            email: ''
        });
        this.form = this._formBuilder.group({
        });
    }

    fnNext() {
        this.isLoading = true;
        const email = this.loginForm.get('email').value;
        if (this.fnCheckIdentifier(email)) {
            this.payloadObj = {
                type: 'email',
                identifier: email
            };
        } else {
            this.payloadObj = {
                type: 'username',
                identifier: email
            };
        }
        this._security.getAuthenticationParameters(this.payloadObj.type, this.payloadObj.identifier)
            .subscribe((res: any) => {
                this.isLoading = false;
                this.isSecurityMode = true;
                this.fieldsArray = res.fields;
            });
    }

    fnSignIn(model) {
        this.payloadObj.body = model;
        this._security.createSession(this.payloadObj.type, this.payloadObj.identifier, this.payloadObj.body)
            .subscribe((res: any) => {
                this._auth.fnSetToken(res.id);
            });
    }

    private fnCheckIdentifier(text) {
        const regex = /(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|('.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
        return regex.test(text);
    }

    fnBack() {
        this.isSecurityMode = false;
    }

}


