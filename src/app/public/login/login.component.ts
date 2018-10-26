import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public message: string;

  constructor(
    private auth: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login() {
    this.message = null;
    this.auth.login(this.email, this.password).then(
      () => {
        this.router.navigateByUrl('/product-lookup');
      }).catch(
      (error) => {
        alert(error.message);
        console.error(error);
      });
  }
}
