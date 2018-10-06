import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthenticationService,
  ) { }

  canActivate(): boolean {
    if (!this.auth.getToken()) {
      this.redirectToLogin();
      return false;
    }

    return true;
  }

  private redirectToLogin() {
    console.log('redirectToLogin');
    this.router.navigateByUrl('login');
  }
}
