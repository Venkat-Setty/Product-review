import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import { Router } from '@angular/router';
import { IUser } from '../../../entities/user';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  public user: IUser;
  constructor(
    private router: Router,
    private auth: AuthenticationService,
  ) { }

  ngOnInit() {
    this.auth.user().subscribe(
      (user) => this.user = user
    );
  }

  logout() {
    this.auth.logout().then(
      () => this.router.navigateByUrl('/login'),
    );
  }
}
