import { Component, OnInit } from "@angular/core";
import { Item } from "./item";
import { ITEMS } from "./item.list";
import {
	MatDialog,
	MatExpansionPanel,
	MatExpansionPanelTitle,
	MatExpansionPanelDescription
} from "@angular/material";

@Component({
	selector: "app-items",
	templateUrl: "./items.component.html",
	styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
	items = ITEMS;

	constructor() {}

	ngOnInit() {}
}
