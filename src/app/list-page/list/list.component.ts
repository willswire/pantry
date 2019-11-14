import { Component, OnInit, Inject, ComponentRef } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { HaveComponent } from "./have/have.component";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  cardImage: string;
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
    this.cardImage =
      "assets/" + Math.ceil(Math.random() * 7) + "_listimage.png";
  }
}
