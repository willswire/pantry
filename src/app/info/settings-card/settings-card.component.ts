import { Component, OnInit } from "@angular/core";

@Component({
  selector: "info-settings-card",
  templateUrl: "./settings-card.component.html",
  styleUrls: ["./settings-card.component.css"]
})
export class SettingsCardComponent implements OnInit {
  notifications: string[] = ["All", "Some", "None"];

  constructor() {}

  ngOnInit() {}
}
