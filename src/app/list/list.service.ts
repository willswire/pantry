import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ListService {
  private headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private _http: HttpClient) {}

  public createList(title: String, userID: String) {
    return this._http.post(
      `https://pantry-api.glitch.me/api/lists/`,
      { title: title, userID: userID },
      { headers: this.headers }
    );
  }

  public deleteList(listID: String) {
    return this._http.delete(
      `https://pantry-api.glitch.me/api/lists/${listID}`,
      {
        headers: this.headers,
        observe: "response",
        responseType: "text"
      }
    );
  }

  public getListByID(listID: String) {
    return this._http.get<any>(
      `https://pantry-api.glitch.me/api/lists/${listID}`,
      {
        headers: this.headers
      }
    );
  }

  public updateList(listID: String, title: String) {
    return this._http.put(
      `https://pantry-api.glitch.me/api/lists/${listID}`,
      { title: title },
      { headers: this.headers }
    );
  }

  public shareList(listID: String, username: String){
    return this._http.post(
      `https://pantry-api.glitch.me/api/users/${username}/join`,
      { listID: listID },
      { headers: this.headers }
    );
  }
}
