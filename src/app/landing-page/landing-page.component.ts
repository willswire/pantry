import { Component, OnInit } from "@angular/core";
import { DEVELOPERS } from "../../assets/DEVELOPERS";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"]
})
export class LandingPageComponent implements OnInit {
  constructor() {}
  developers = DEVELOPERS;

  ngOnInit() {}
}
