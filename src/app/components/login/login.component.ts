import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  isAuthenticated: boolean;

  constructor(private oktaAuth: OktaAuthService) {
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => {
        console.log('Authentication state has changed to: ' + isAuthenticated);
        this.isAuthenticated = isAuthenticated;
      });
   }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

  login() {
    console.log('Am i authenticated? '+this.isAuthenticated);
    console.log(this.oktaAuth.getAccessToken().then(value => console.log(value)))
    this.oktaAuth.loginRedirect('/bgChart');
  }

  logout() {
    this.oktaAuth.logout('/');
  }

}
