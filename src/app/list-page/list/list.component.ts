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
  listRef: string;
  userPic: string;

  constructor(private dialog: MatDialog, private api: ListService) {}

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
      if (result) {
        this.listName = result;
        this.api.updateList(this.listRef, this.listName).subscribe(result => {
          console.log("The list has been renamed");
        });
      }
    });
  }

  openNeedComponent() {
    const dialogRef = this.dialog.open(NeedComponent, {
      width: "400px"
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

  deleteList() {
    this.api.deleteList(this.listRef).subscribe(result => {
      console.log(result);
      this.viewRef.destroy();
    });
  }

  setListImage() {
    this.cardImage =
      "assets/" +
      Math.ceil(Math.random() * environment.numberOfListImages) +
      "_listimage.png";
  }

  setListRef() {
    if (this.listRef) {
      this.api.getListByID(this.listRef).subscribe(result => {
        console.log("The exisiting list has a listref of: " + result._id);
      });
      this.setListData();
    } else {
      this.api.createList("My New List").subscribe(result => {
        this.listRef = result.toString();
        console.log("The new list has a listref of: " + this.listRef);
      });
    }
  }

  setListData() {
    this.api.getListByID(this.listRef).subscribe(result => {
      console.log("The exisiting list has the title of: " + result.title);
      this.listName = result.title;
    });
  }

  ngOnInit() {
    this.setListImage();
    this.setListRef();
  }
}
