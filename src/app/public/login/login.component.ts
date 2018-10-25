import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public isLogin: boolean;
  public username: string;
  public password: string;
  public message: string;

  constructor(
    private auth: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.isLogin = false;
  }

  login() {
    this.message = null;
    this.auth.login(this.username, this.password).then(
      (data) => {
        console.log(data);
      }).catch(
      (error) => {
        console.error(error);
      });
  }
}
