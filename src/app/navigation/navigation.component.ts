import { Component, OnInit } from "@angular/core";
import { AppInfoService } from "../app-info.service";
import { Router } from "@angular/router";
import { AuthService } from '../security/services/auth.service';
import { UserStorageService } from '../security/services/user-storage.service';

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  public _title: string;
  public isLoggedIn = false;

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  constructor(
    private app: AppInfoService,
    private router: Router,
    private authService: AuthService,
    private userService: UserStorageService,
  ) { }

  ngOnInit() {
    this.title = this.app.title;
    this.userService.status.subscribe((status: boolean) => {
      this.isLoggedIn = status;
    });
    console.log(this.isLoggedIn);
  }

  goInfo() {
    this.router.navigate(["./info"]);
  }

  public logout() {
    this.authService.logout()
  }
}
