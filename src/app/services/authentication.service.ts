import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { IUser } from '../entities/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {
  }

  user(): Observable<User | null> {
    return this.afAuth.user;
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signup(user: IUser) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }
}
