import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class PublicGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthenticationService,
  ) { }

  canActivate(): boolean {
    if (this.auth.getToken()) {
      this.redirectToLastUrl();
      return false;
    }

    return true;
  }

  private redirectToLastUrl() {
    // const redirect = '/product-lookup';
    console.log('redirectToLastUrl');
    // this.router.navigateByUrl();
  }
}
