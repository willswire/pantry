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

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
  items = ITEMS;
  searchText: string;

  constructor(private _itemSvc: ItemService) {}

  ngOnInit() {
    this._itemSvc.getAllItems().subscribe(val => {
      this.items = val;
      console.log(val);
    });
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
