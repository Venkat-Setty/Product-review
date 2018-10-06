import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public username: string;
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
    this.auth.login(this.username, this.password).subscribe(
      (token) => {
        console.log('token', token);
        if (token) {
          this.router.navigateByUrl(''); // todo make product-lookup page
          // this.router.navigateByUrl('/product-lookup');
        } else {
          this.message = 'Login failed!';
        }
      },
      (error) => {
        console.error(error);
      });
  }
}
