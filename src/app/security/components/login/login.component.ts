import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../../alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loggingIn = false;

  constructor(
    private _authSvc: AuthService,
    private _alertSvc: AlertService,
    private router: Router,
  ) { }

  loginClick() {
    this.loggingIn = true;
    this._authSvc.login(this.username, this.password).pipe(catchError(err => {
      this.loggingIn = false;
      this._alertSvc.error(err);
      return throwError(err);
    })).subscribe(
      data => this.router.navigate(['/lists']),
      err => function(){
        this.loggingIn = false;
        console.log(`Error: ${err}`);
      }
    );
  }

  ngOnInit() {
    this.username = this.password = '';
  }

}
