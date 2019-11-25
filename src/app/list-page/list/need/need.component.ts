import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { DialogData } from "../list.component";

@Component({
  selector: "app-need",
  templateUrl: "./need.component.html",
  styleUrls: ["./need.component.css"]
})
export class NeedComponent implements OnInit, DialogData {
  listName: string;
  listRef: string;

  items: Object[] = [
    {
      name: "Cake",
      expires: new Date(Date.now()),
      icon: "cake"
    },
    {
      name: "Coffee",
      expires: new Date(Date.now()),
      icon: "free_breakfast"
    },
    {
      name: "Steak",
      expires: new Date(Date.now()),
      icon: "outdoor_grill"
    },
    {
      name: "Spinach",
      expires: new Date(Date.now()),
      icon: "eco"
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<NeedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.items;
    this.listName = data.listName;
    this.listRef = data.listRef;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
