import { Component, OnInit } from "@angular/core";
import { ITEMS } from "./item.list";
import {
  MatDialog,
  MatExpansionPanel,
  MatExpansionPanelTitle,
  MatExpansionPanelDescription
} from "@angular/material";
import { Pipe, PipeTransform } from "@angular/core";
import { ItemService } from "./item.service";
import { ListService } from "../list/list.service";
import { UserDataService } from "../user-data.service";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
  items = ITEMS;
  searchText: string;
  userLists: string[] = [];

  constructor(
    private _itemSvc : ItemService,
    private _listSvc : ListService,
    private api: UserDataService
  ) {}

  ngOnInit() {
	  this._itemSvc.getAllItems().subscribe(val => {
		  this.items = val;
		  console.log(val);
    });
    this.getLists();
  }

  getLists() {
    var userToken = JSON.parse(localStorage.getItem("user"));
    var userID = userToken._id;
    console.log("The user ID is: " + userID);
    this.api.getUser(userID).subscribe(data => {
      for (let list of data.Lists) {
        this.userLists.push(list);
      }
    });
  }

  addItemToList(itemID : String) {
    var itemList : any = this._listSvc.getItems(this.userLists[0]);
    itemList.push(itemID);
    this._listSvc.addItem(this.userLists[0], itemList);
  }
}

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter(it => {
      return it.name.toLowerCase().includes(searchText);
    });
  }
}
