import { Injectable } from "@angular/core";
import { UserStorageService } from "./user-storage.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(
    private router: Router,
    private _http: HttpClient,
    private _userSvc: UserStorageService
  ) {}

  public login(email: string, password: string) {
    return this._http
      .post(
        "environment.API/api/auth/login",
        { email: email, password: password },
        { headers: this.headers }
      )
      .pipe(
        map((user: any) => {
          this._userSvc.setUser(user);
          return user;
        })
      );
  }

  public logout() {
    this._userSvc.removeUser();
  }

  public register(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    return this._http
      .post(
        "environment.API/api/auth/register",
        {
          email: email,
          firstName: firstName,
          lastName: lastName,
          password: password
        },
        { headers: this.headers }
      )
      .pipe(
        map((user: any) => {
          this._userSvc.setUser(user);
          return user;
        })
      );
  }
}
