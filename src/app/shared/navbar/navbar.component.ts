import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/custom/auth-service/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor(private _auth: AuthService,
                private _router: Router) {
    }
    loggedInUser: any;
    greetings: any;

    static getGreetings() {
        const myDate = new Date();
        const hrs = myDate.getHours();

        if (hrs < 12) {
            return 'Good Morning';
        } else if (hrs >= 12 && hrs <= 17) {
            return 'Good Afternoon';
        } else if (hrs >= 17 && hrs <= 24) {
            return 'Good Evening';
        }
    }

    ngOnInit() {
        this.greetings = NavbarComponent.getGreetings();
        this._auth.loggedInUser.subscribe((user) => {
            if (user) {
                this.loggedInUser = user;
            }
        });
    }

    fnLogout() {
        this._auth.fnRemoveToken();
        this._router.navigate(['login']);
    }


}
