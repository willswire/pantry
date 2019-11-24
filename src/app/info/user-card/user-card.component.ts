import { Component, OnInit } from "@angular/core";
import { UserDataService } from "src/app/user-data.service";

@Component({
  selector: "info-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.css"]
})
export class UserCardComponent implements OnInit {
  userPic: string;
  userName: string;

  constructor(private api: UserDataService) {}

  ngOnInit() {
    this.setUser();
  }

  setUser() {
    var userToken = JSON.parse(localStorage.getItem("user"));
    var userID = userToken._id;
    this.api.getUser(userID).subscribe(data => {
      this.userPic = data.pic;
      this.userName = data.Name;
    });
  }
}
