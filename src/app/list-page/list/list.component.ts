import { Component, OnInit, Inject, ComponentRef } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { HaveComponent } from "./have/have.component";
import { NeedComponent } from "./need/need.component";
import { EditComponent } from "./edit/edit.component";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  cardImage: string;
  listName: string = "My New List";
  viewRef: ComponentRef<ListComponent>;
  favorite: boolean = false;
  heartColor: string;

  constructor(public dialog: MatDialog) {}

  favoriteList() {
    if (this.favorite) {
      this.heartColor = "white";
      this.favorite = false;
    } else {
      this.heartColor = "warn";
      this.favorite = true;
    }
  }

  editList() {
    const dialogRef = this.dialog.open(EditComponent, {
      width: "400px",
      data: { listName: this.listName }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      if (result) this.listName = result;
    });
  }

  openHaveComponent() {
    const dialogRef = this.dialog.open(HaveComponent, {
      width: "400px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  openNeedComponent() {
    const dialogRef = this.dialog.open(NeedComponent, {
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
      "assets/" +
      Math.ceil(Math.random() * environment.numberOfListImages) +
      "_listimage.png";
  }
}
