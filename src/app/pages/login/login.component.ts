import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import * as _ from 'lodash';
import {AuthService} from '../../services/auth-service/auth.service';

import {CookieService} from 'ngx-cookie';
import {UserService} from '../../services/access/user/user.service';
import {SecurityService} from '../../services/access/security/security.service';
import {Router} from '@angular/router';

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
    userId: string;
    fieldsArray: any[];
    model: any = {};

    constructor(private _formBuilder: FormBuilder,
                private _security: SecurityService,
                private _auth: AuthService,
                private _user: UserService,
                private _router: Router) {
        this.isSecurityMode = false;
        this.isLoading = false;
        this.fieldsArray = [];
    }

    ngOnInit() {
        this.fnCreateForm();
        this._auth.currentAuthUserId.subscribe((id) => {
            if (id) {
                this.userId = id;
            }
        });
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
            }, (error) => {
                this.isLoading = false;
            });
    }

    fnSignIn(model) {
        this.payloadObj.body = model;
        this._security.createSession(this.payloadObj.type, this.payloadObj.identifier, this.payloadObj.body)
            .subscribe((res: any) => {
                this._auth.fnSetToken(res.id);
                if (this.userId) {
                   this._user.getUser(this.userId).subscribe((userObj) => {
                       this._auth.loggedInUser.next(userObj);
                       this._router.navigate(['/map']);
                       /*this._user.getUserPrivileges().subscribe((res) => {
                       });*/
                   });
                }
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


