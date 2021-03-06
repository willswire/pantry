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

  public createList(title: string, userID: string) {
    return this._http.post(
      `https://pantry-api.glitch.me/api/lists/`,
      { title: title, userID: userID },
      { headers: this.headers }
    );
  }

  public deleteList(listID: string, userID: string) {
    return this._http.delete(
      `https://pantry-api.glitch.me/api/lists/${listID}/${userID}`,
      {
        headers: this.headers,
        observe: "response",
        responseType: "text"
      }
    );
  }

  public getListByID(listID: string) {
    return this._http.get<any>(
      `https://pantry-api.glitch.me/api/lists/${listID}`,
      {
        headers: this.headers
      }
    );
  }

  public updateList(listID: string, body: Object) {
    return this._http.put(
      `https://pantry-api.glitch.me/api/lists/${listID}`,
      body,
      { headers: this.headers }
    );
  }

  public shareList(listID: string, username: string) {
    return this._http.post(
      `https://pantry-api.glitch.me/api/users/${username}/join`,
      { listID: listID },
      { headers: this.headers }
    );
  }

  public getItems(listID: String) {
    let items = [];
    this._http.get<any>(
      `https://pantry-api.glitch.me/api/lists/${listID}`,
      {headers: this.headers}
    ).subscribe(val => items.concat(val));
    
    return items;
  }

  public addItem(listID: String, itemID: String) {
    return this._http.put(
      `https://pantry-api.glitch.me/api/lists/${listID}/add/${itemID}`,
      { headers : this.headers }

    );
  }

  public deleteItem(listID: string, itemID: string) {
    return this._http.delete(
      `https://pantry-api.glitch.me/api/lists/${listID}/${itemID}`,
      {
        headers: this.headers,
        observe: "response",
        responseType: "text"
      }
    );
  }
}
