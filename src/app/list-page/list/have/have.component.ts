import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-have",
  templateUrl: "./have.component.html",
  styleUrls: ["./have.component.css"]
})
export class HaveComponent implements OnInit {
  items: Object[] = [
    {
      name: "Steak",
      expires: new Date(Date.now()),
      icon: "outdoor_grill"
    },
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
