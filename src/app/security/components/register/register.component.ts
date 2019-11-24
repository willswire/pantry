import { Component, OnInit } from "@angular/core";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { throwError } from "rxjs";

import { AlertService } from "../../../alert/alert.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  name: string;
  gender: string;
  birthday: Date;
  registering = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private _alertSvc: AlertService
  ) {}

  ngOnInit() {}

  registerUser() {
    this.registering = true;
    this.authService
      .register(
        this.username,
        this.password,
        this.name,
        this.gender,
        this.birthday
      )
      .pipe(
        catchError(err => {
          this.registering = false;
          this._alertSvc.error(err);
          return throwError(err);
        })
      )
      .subscribe(
        data => this.router.navigate(["/lists"]),
        err =>
          function() {
            this.registering = false;
          }
      );
  }
}
