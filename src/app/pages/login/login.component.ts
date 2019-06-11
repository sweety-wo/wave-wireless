import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Constant} from '../../constant/constant';

import {AuthService} from '../../services/auth-service/auth.service';
import {UserService} from '../../services/access/user/user.service';
import {SecurityService} from '../../services/access/security/security.service';

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
                private _auth: AuthService,
                private _user: UserService,
                private _router: Router) {
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
            }, (error) => {
                this.isLoading = false;
            });
    }

    fnSignIn(model) {
        this.isLoading = true;
        this.payloadObj.body = model;
        this._security.createSession(this.payloadObj.type, this.payloadObj.identifier, this.payloadObj.body)
            .subscribe((res: any) => {
                this._auth.fnSetToken(res.id);
                this._auth.fnGetAuthUser();
                this._router.navigate(['/map']);
                this.isLoading = false;
            }, (error) => {
                this.isLoading = false;
            });
    }

    private fnCheckIdentifier(text) {
        const regex = Constant.EMAIL_REG_EX;
        return regex.test(text);
    }

    fnBack() {
        this.isSecurityMode = false;
    }

}


