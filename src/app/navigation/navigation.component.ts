import { Component, OnInit } from "@angular/core";
import { AppInfoService } from "../app-info.service";
import { Router } from "@angular/router";
import { AuthService } from '../security/services/auth.service';

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  public _title: string;

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  constructor(private app: AppInfoService, private router: Router, public authService: AuthService) {}

  ngOnInit() {
    this.title = this.app.title;
  }

  goInfo() {
    this.router.navigate(["./info"]);
  }
}
