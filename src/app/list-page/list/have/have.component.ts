import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-have",
  templateUrl: "./have.component.html",
  styleUrls: ["./have.component.css"]
})
export class HaveComponent implements OnInit {
  private _items: Object[] = [
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

  public get items(): Object[] {
    return this._items;
  }
  public set items(value: Object[]) {
    this._items = value;
  }

  constructor(
    public dialogRef: MatDialogRef<HaveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.items;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
