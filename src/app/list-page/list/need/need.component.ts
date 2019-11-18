import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-need",
  templateUrl: "./need.component.html",
  styleUrls: ["./need.component.css"]
})
export class NeedComponent implements OnInit {
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
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<NeedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.items;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
