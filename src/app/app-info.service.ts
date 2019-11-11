import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AppInfoService {
  private _title: string = "Pantry";

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  constructor() {}
}
