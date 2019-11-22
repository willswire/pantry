import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  private headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private _http: HttpClient) {}

  public createItem(name: String) {
    return this._http
      .post(
        `https://pantry-api.glitch.me/api/items/`,
        { name: name },
        { headers: this.headers }
      )
      .pipe(
        map((item: any) => {
          return item;
        })
      );
  }

  public deleteItem(itemID: String) {
    return this._http
      .delete(`https://pantry-api.glitch.me/api/items/${itemID}`, {
        headers: this.headers,
        observe: "response",
        responseType: "text"
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  public getItemByID(itemID: String) {
    return this._http
      .get<any>(`https://pantry-api.glitch.me/api/items/${itemID}`, {
        headers: this.headers
      })
      .pipe(
        map((item: any) => {
          return item;
        })
      );
  }
  public getItemByName(name: String) {
    return this._http
      .get<any>(`https://pantry-api.glitch.me/api/items/item/${name}`, {
        headers: this.headers
      })
      .pipe(
        map((item: any) => {
          return item;
        })
      );
  }
}
