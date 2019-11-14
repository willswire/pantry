import { Component, OnInit, Inject, ComponentRef } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  heroImages: string[] = [
    "assets/1_listimage.png",
    "assets/2_listimage.png",
    "assets/3_listimage.png",
    "assets/4_listimage.png"
  ];
  heroImage: string;
  viewRef: ComponentRef<ListComponent>;

  constructor(public dialog: MatDialog) {}

  openHaveList(): void {
    const dialogRef = this.dialog.open(HaveList, {
      width: "400px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  deleteList() {
    this.viewRef.destroy();
  }

  ngOnInit() {
    this.heroImage = this.heroImages[
      Math.floor(Math.random() * this.heroImages.length)
    ];
  }
}

@Component({
  selector: "have-list",
  templateUrl: "list.have.html"
})
export class HaveList {
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
    public dialogRef: MatDialogRef<HaveList>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.items;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
