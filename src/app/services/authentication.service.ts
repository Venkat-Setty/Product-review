import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { IUser } from '../entities/user';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor(
    private afAuth: AngularFireAuth,
  ) {
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signup(user: IUser) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(user.email, user.password)
        .then((credential) => {
          credential.user.updateProfile({
            displayName: user.username,
            photoURL: user.country,
          }).then(
            () => {
              console.log('resolve(credential)');
              resolve(credential);
            },
          ).catch(
            (e) => reject(e),
          );
        })
        .catch((e) => reject(e))
      ;
    });
  }

  forgotPassword(email: string) {
    const url = `${location.protocol}//${location.hostname}:${location.port}`;
    return this.afAuth.auth.sendPasswordResetEmail(email, { url });
  }

  user(): Observable<IUser> {
    return this.afAuth.authState.pipe(
      map((user) => (user ? {
        email: user.email,
        username: user.displayName,
        country: user.photoURL,
      } : null)),
    );
  }

  updateInfo(user) {
    return this.afAuth.auth.updateCurrentUser(user);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }
}
