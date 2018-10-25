import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public email: string;
  public message: string;
  public showComplete = false;
  constructor(
  private auth: AuthenticationService,
  private router: Router,
) { }

  ngOnInit() {
  }

  reset() {
    // this.auth.reset(this.email).subscribe((response) => {
    //   if (response) {
    //     this.showComplete = true;
    //   } else {
    //     this.message = 'Reset failed!';
    //   }
    // });
  }
}
