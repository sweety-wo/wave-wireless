import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SecurityService} from '../../services/access';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSecurityMode: boolean;
  loginForm: FormGroup;
  payloadObj: any;
  isLoading: boolean;


  constructor(private _formBuilder: FormBuilder,
              private _securityService: SecurityService) {
    this.isSecurityMode = false;
    this.isLoading = false;
  }

  ngOnInit() {
    this.fnCreateForm();
  }


  private fnCreateForm() {
    this.loginForm = this._formBuilder.group({
      email: ''
    });
  }

  public fnNext() {
    this.isLoading = true;
    const email = this.loginForm.get('email').value;
    if (this.fncheckIfEmailInString(email)) {
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
    this._securityService.getAuthenticationParameters(this.payloadObj.type, this.payloadObj.identifier)
      .subscribe((res) => {
        this.isLoading = false;
        this.isSecurityMode = true;
        console.log('res', res);
      });
  }

  fncheckIfEmailInString(text) {
    const regex = /(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|('.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    return regex.test(text);
  }

  // fnNext() {
  //   this.isSecurityMode = true;
  // }

  fnBack() {
    this.isSecurityMode = false;
  }

}


