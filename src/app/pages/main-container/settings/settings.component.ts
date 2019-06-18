import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../../services/access/security/security.service';
import {AuthService} from '../../../services/auth-service/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    changePasswordForm: FormGroup;
    form: FormGroup;
    isSecurityMode: boolean;
    userFields: any = [];
    model: any = {};
    loggedInUser: any = {};
    isPasswordMismatch: boolean;
    isLoading: boolean;

  constructor(private _formBuilder: FormBuilder,
              private _security: SecurityService,
              private _auth: AuthService) {
      this.isSecurityMode = false;
      this.isPasswordMismatch = false;
      this.isLoading = false;
  }

  ngOnInit() {
      this.fnCreateForm();
      this._auth.loggedInUser.subscribe((user) => {
          if (user) {
              this.loggedInUser = user;
              console.log('this.loggedInUser', this.loggedInUser);
          }
      });
  }

    private fnCreateForm() {
        this.changePasswordForm = this._formBuilder.group({
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        });
        this.form = this._formBuilder.group({
        });
    }

    fnCheckPassword() {
        this.isPasswordMismatch = this.changePasswordForm.get('password').value !== this.changePasswordForm.get('confirmPassword').value;
    }

    fnGetAuthFields() {
        this.isLoading = true;
        this.userFields = [];
        const inputObj = {
            type: 'email',
            identifier: this.loggedInUser.email // loginUser.email
        };
        this._security.getAuthenticationParameters(inputObj.type, inputObj.identifier)
            .subscribe((res: any) => {
                res.fields.forEach((fieldObj) => {
                    fieldObj.templateOptions.label = '';
                    fieldObj.templateOptions.description = '';
                });
                this.userFields = res.fields;
                this.isLoading = false;
                this.isSecurityMode = true;
            }, (err) => {
                this.isLoading = false;
            });
    }

    fnChangePassword(model) {
        this.isLoading = true;
        const inputObj = {
            type: 'email',
            identifier: this.loggedInUser.email, // loginUser.email
            body: {
                password: model
            }
        };

        this._security.createSession(inputObj.type, inputObj.identifier, inputObj.body.password)
            .subscribe((res: any) => {
                this.changePasswordForm.reset();
                this.isLoading = false;
                this.form.reset(this.form.value);
                this._auth.fnSetToken(res.id);
                this._auth.fnGetAuthUser();
                this.isSecurityMode = false;
            }, (err) => {
                console.log('err', err);
                this.changePasswordForm.reset();
                this.form.reset(this.form.value);
                this.isLoading = false;
                this.isSecurityMode = false;
            });
    }

}
