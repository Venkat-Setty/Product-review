import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../entities/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  private account = {
    username: 'admin',
    email: 'admin@product-review.dev',
    password: 'admin'
  };

  constructor() { }

  login(username: string, password: string): Observable<string> {
    return this.fakeLogin(username, password);
  }


  reset(email: string): Observable<boolean> {
    return this.fakeReset(email);
  }

  signup(user: IUser): Observable<boolean> {
    return this.fakeSignup(user);
  }


  /**
   * fake services
   *  return token if authenticated
   */
  private fakeLogin(username: string, password: string): Observable<string> {
    console.log(username, password, this.account);
    if (username === this.account.username && password === this.account.password) {
      const token = 'this-is-token';
      this.setToken(token)
      return of(token);
    } else {
      return of(null);
    }
  }
  /**
   * fake reset, return true if email start with admin@...
   */
  private fakeReset(email: string): Observable<boolean> {
    return of(email.startsWith('admin'));
  }

  /**
   * fake register return false if the username start with fail
   */
  private fakeSignup(user: IUser): Observable<boolean> {
    return of(!user.username.startsWith('fail'));
  }

  private setToken(token) {
    localStorage.setItem('token', token);
  }

  private getToken(token) {
    localStorage.getItem('token');
  }
}
