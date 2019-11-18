import { Component, OnInit } from "@angular/core";
import { Item } from "./item";
import { ITEMS } from "./item.list";
import { MatDialog } from "@angular/material";

@Component({
	selector: "app-items",
	templateUrl: "./items.component.html",
	styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
	items = ITEMS;

	constructor(public dialog: MatDialog) {}

	openItemInfo(): void {
		const dialogRef = this.dialog.open(Item, {
			width: "400px"
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log("The dialog was closed");
		});
	}

	ngOnInit() {}
}
