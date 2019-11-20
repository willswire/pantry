import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ListService {
  private headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private _http: HttpClient) {}

  public createList(title: String) {
    return this._http
      .post(
        environment.API + `/api/lists/`,
        { title: title },
        { headers: this.headers }
      )
      .pipe(
        map((list: any) => {
          return list;
        })
      );
  }

  public deleteList(listID: String) {
    return this._http
      .delete(environment.API + `/api/lists/${listID}`, {
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

  public getListByID(listID: String) {
    return this._http
      .get<any>(environment.API + `/api/lists/${listID}`, {
        headers: this.headers
      })
      .pipe(
        map((list: any) => {
          return list;
        })
      );
  }
}
