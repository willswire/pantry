import { Component, OnInit } from "@angular/core";
import { AppInfoService } from "../app-info.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  private _title: string;

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  constructor(private app: AppInfoService) {}

  ngOnInit() {
    this.title = this.app.title;
  }
}
