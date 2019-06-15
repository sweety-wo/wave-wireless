import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../../services/access/security/security.service';
import {AuthService} from '../../../services/auth-service/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    changePasswordForm: FormGroup;
    isAuthFieldsLoading: boolean;
    isSecurityMode: boolean;
    userFields: any = [];
    model: any = {};

  constructor(private _formBuilder: FormBuilder,
              private _security: SecurityService,
              private _auth: AuthService) {
      this.isAuthFieldsLoading = false;
      this.isSecurityMode = false;
  }

  ngOnInit() {
      this.fnCreateForm();
  }

    private fnCreateForm() {
        this.changePasswordForm = this._formBuilder.group({
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        });
    }

    fnGetAuthFields() {
        this.isAuthFieldsLoading = true;
        this.userFields = [];
        const inputObj = {
            type: 'email',
            identifier: '' // loginUser.email
        };
        this._security.getAuthenticationParameters(inputObj.type, inputObj.identifier)
            .subscribe((res: any) => {
                res.fields.forEach((fieldObj) => {
                    fieldObj.templateOptions.label = '';
                    fieldObj.templateOptions.description = '';
                });
                this.userFields = res.fields;
                this.isAuthFieldsLoading = false;
                this.isSecurityMode = true;
            }, (err) => {
                this.isAuthFieldsLoading = false;
            });
    }

    fnChangePassword(model) {
        const inputObj = {
            type: 'email',
            identifier: '', // loginUser.email
            body: {
                password: model
            }
        };

        this._security.createSession(inputObj.type, inputObj.identifier, inputObj.body)
            .subscribe((res: any) => {
                this._auth.fnSetToken(res.id);
                this._auth.fnGetAuthUser();
                this.isSecurityMode = false;
            }, (err) => {
                console.log('err', err);
            });
    }

}
