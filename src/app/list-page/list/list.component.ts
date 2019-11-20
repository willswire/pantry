import { Component, OnInit, Inject, ComponentRef } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { NeedComponent } from "./need/need.component";
import { EditComponent } from "./edit/edit.component";
import { environment } from "src/environments/environment";
import { ListService } from "src/app/list/list.service";

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
  dialog: MatDialog;
  listRef: any;

  constructor(private api: ListService) {
    this.api.createList("My New List").subscribe(result => {
      this.listRef = result;
      console.log("The new component has a listref of: " + this.listRef);
    });
  }

  favoriteList() {
    this.favorite ? (this.heartColor = "white") : (this.heartColor = "warn");
    this.favorite = !this.favorite;
  }

  editList() {
    const dialogRef = this.dialog.open(EditComponent, {
      width: "400px",
      data: { listName: this.listName }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.listName = result;
    });
  }

  openNeedComponent() {
    const dialogRef = this.dialog.open(NeedComponent, {
      width: "400px"
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

  deleteList() {
    this.viewRef.destroy();
  }

  setListImage() {
    this.cardImage =
      "assets/" +
      Math.ceil(Math.random() * environment.numberOfListImages) +
      "_listimage.png";
  }

  ngOnInit() {
    this.setListImage();
  }
}
