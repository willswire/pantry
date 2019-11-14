import { Component, OnInit } from "@angular/core";
import { ListComponent } from "./list/list.component";

@Component({
  selector: "app-lists",
  templateUrl: "./lists.component.html",
  styleUrls: ["./lists.component.css"]
})
export class ListsComponent implements OnInit {
  myLists: ListComponent[] = [];

  constructor() {}

  ngOnInit() {}

  createList() {
    console.log("creating a new list");
    this.myLists.push(null);
  }
}
