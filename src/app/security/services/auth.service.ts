import { Injectable } from "@angular/core";
import { UserService } from "./user.service";
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
    private _userSvc: UserService
  ) {}

  public login(username: string, password: string) {
    return this._http
    .post(
      "http://pantry-security-server.glitch.me/api/auth/login",
      { username: username, password: password },
      { headers: this.headers }
    )
    .pipe(
      map((user: any) => {
        console.log(user);
        this._userSvc.setUser(user);
        return user;
      })
    );
  }

  public logout() {
    this._userSvc.removeUser();
    this.router.navigate(['/login']);
  }

  public register(
    username: string,
    password: string,
    name: string,
    gender: string,
    birthday: Date
  ) {
    return this._http
    .post(
      "https://pantry-security-server.glitch.me/api/auth/register",
      {
        username: username,
        password: password,
        name: name,
        gender: gender,
        birthday: birthday
      },
      { headers: this.headers }
    )
    .pipe(
      map((user: any) => {
        console.log(user);
        this._userSvc.setUser(user);
        return user;
      })
    );
  }

  public isLoggedIn() {
    return localStorage.getItem("user") != null;
  }
}
