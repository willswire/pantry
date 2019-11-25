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
  items: Object[];

  constructor(
    public dialogRef: MatDialogRef<NeedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    if (data.items) this.items = data.items;
    this.listName = data.listName;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
