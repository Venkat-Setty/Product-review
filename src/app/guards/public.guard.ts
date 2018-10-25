import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PublicGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthenticationService,
  ) { }

  canActivate() {
    return this.auth.user().pipe(map((user) => {
      console.log(user);
      const canActivate = !user;
      if (!canActivate) {
        this.redirectToLastUrl();
      }
      return canActivate;
    }));
  }

  private redirectToLastUrl() {
    const redirect = 'product-lookup';
    console.log('redirectToLastUrl');

    this.router.navigateByUrl(redirect);
  }
}
