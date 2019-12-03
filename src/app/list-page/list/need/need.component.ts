import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { DialogData } from "../list.component";
import { ListService } from "src/app/list/list.service";

@Component({
  selector: "app-need",
  templateUrl: "./need.component.html",
  styleUrls: ["./need.component.css"]
})
export class NeedComponent implements OnInit, DialogData {
  listName: string;
  items: any;
  listRef: string;

  constructor(
    public dialogRef: MatDialogRef<NeedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public api: ListService
  ) {
    if (data.items) this.items = data.items;
    this.listName = data.listName;
    this.listRef = data.listRef;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}

  removeItem(itemID: string) {
    console.log("The list is: " + this.listRef);
    console.log("The item is: " + itemID);
    this.api.deleteItem(this.listRef, itemID).subscribe(result => {
      result;
    });
    this.items = this.items.filter(item => {
      return item._id !== itemID;
    });
  }
}
