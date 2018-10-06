import { Component, OnInit } from '@angular/core';
import { IUser } from '../../entities/user';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  public user: IUser;
  public confirmPassword: string;
  public message: string;
  public countries: any;
  public signupSuccess = false;

  constructor(
    private auth: AuthenticationService,
    private countryService: CountryService,
    private router: Router,
  ) {
    this.user = {
      email: '',
      username: '',
      country: '',
      password: '',
    } as IUser;
  }

  ngOnInit() {
    this.countryService.getCountriesList().subscribe((response) => this.countries = response);
  }

  signup() {
    this.auth.signup(this.user).subscribe((response) => {
      if (response) {
        this.signupSuccess = true;
      } else {
        this.message = 'Signup failed!';
      }
    });
  }
}
