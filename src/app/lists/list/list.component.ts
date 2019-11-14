import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

export interface DialogData {
  animal: string;
  name: string;
}

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

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openHaveList(): void {
    const dialogRef = this.dialog.open(HaveList, {
      width: "90%",
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.animal = result;
    });
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
  constructor(
    public dialogRef: MatDialogRef<HaveList>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
