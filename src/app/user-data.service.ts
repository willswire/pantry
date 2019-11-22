import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserDataService {
  private headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private _http: HttpClient) {}

  public getUser(userID: String) {
    return this._http.get<any>(
      `https://pantry-api.glitch.me/api/users/${userID}`,
      {
        headers: this.headers
      }
    );
  }
}
