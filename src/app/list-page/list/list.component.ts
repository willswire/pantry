import { Component, OnInit, ComponentRef } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { NeedComponent } from "./need/need.component";
import { EditComponent } from "./edit/edit.component";
import { environment } from "src/environments/environment";
import { ListService } from "src/app/list/list.service";
import { ItemService } from "src/app/items/item.service";
import { ShareComponent } from "./share/share.component";

export interface DialogData {
  listName: string;
  items: Object[];
}

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
  heartColor: string = "white";
  listRef: string;
  userPic: string;
  items: Object[] = [];

  constructor(
    private dialog: MatDialog,
    private listApi: ListService,
    private itemApi: ItemService
  ) {}

  setFavorite(statement: boolean = !this.favorite) {
    if (statement) {
      this.heartColor = "warn";
      this.favorite = true;
    } else {
      this.heartColor = "white";
      this.favorite = false;
    }
  }

  editList() {
    const dialogRef = this.dialog.open(EditComponent, {
      width: "400px",
      data: { listName: this.listName }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listName = result;
        this.listApi
          .updateList(this.listRef, this.listName)
          .subscribe(result => result);
      }
    });
  }

  shareList() {
    const dialogRef = this.dialog.open(ShareComponent, {
      width: "400px"
    });

    dialogRef.afterClosed().subscribe(user => {
      if (user) {
        this.listApi.shareList(this.listRef, user).subscribe(result => result);
      }
    });
  }

  openNeedComponent() {
    const dialogRef = this.dialog.open(NeedComponent, {
      width: "400px",
      data: { items: this.items, listName: this.listName }
    });

    dialogRef.afterClosed().subscribe(result => result);
  }

  deleteList() {
    var userToken = JSON.parse(localStorage.getItem("user"));
    var userID = userToken._id;
    this.listApi.deleteList(this.listRef, userID).subscribe(result => {
      result;
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
      this.listApi.getListByID(this.listRef).subscribe(result => result);
      this.setListData();
    } else {
      var userToken = JSON.parse(localStorage.getItem("user"));
      var userID = userToken._id;
      this.listApi.createList(this.listName, userID).subscribe(result => {
        this.listRef = result.toString();
      });
    }
  }

  setListData() {
    this.listApi.getListByID(this.listRef).subscribe(result => {
      this.listName = result.title;
      this.setFavorite(result.favorite);
      this.getItems(Object.values(result.items));
    });
  }

  getItems(itemRefs: string[]) {
    if (itemRefs.length > 0) {
      for (let itemRef of itemRefs) {
        this.itemApi.getItemByID(itemRef).subscribe(result => {
          this.items.push(result);
        });
      }
    } else {
      this.items.push({
        name: "No Items",
        description: "There are currently no items in this list",
        emoji: "&#xe413;"
      });
    }
  }

  ngOnInit() {
    this.setListImage();
    this.setListRef();
  }
}
