import { Component, OnInit, Inject, ComponentRef } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { HaveComponent } from "./have/have.component";

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
    const dialogRef = this.dialog.open(HaveComponent, {
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
    this.heroImage =
      "assets/" + Math.ceil(Math.random() * 7) + "_listimage.png";
  }
}
