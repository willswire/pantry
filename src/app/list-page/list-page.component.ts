import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";
import { ListComponent } from "./list/list.component";
import { UserDataService } from "../user-data.service";

@Component({
  selector: "app-lists",
  templateUrl: "./list-page.component.html",
  styleUrls: ["./list-page.component.css"]
})
export class ListPageComponent implements OnInit {
  componentRef: any;
  myCurrentListRefs: string[] = [];
  userPic: string;

  @ViewChild("listContainer", { static: false, read: ViewContainerRef })
  entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private api: UserDataService
  ) {}

  ngOnInit() {
    this.getLists();
  }

  getLists() {
    var userToken = JSON.parse(localStorage.getItem("user"));
    var userID = userToken._id;
    this.api.getUser(userID).subscribe(data => {
      for (let list of data.Lists) {
        this.myCurrentListRefs.push(list);
      }
      this.userPic = data.pic;
      this.generateLists();
    });
  }

  generateLists() {
    for (let myCurrentListRef of this.myCurrentListRefs) {
      const factory = this.resolver.resolveComponentFactory(ListComponent);
      this.componentRef = this.entry.createComponent(factory);
      this.componentRef.instance.viewRef = this.componentRef;
      this.componentRef.instance.listRef = myCurrentListRef;
      this.componentRef.instance.userPic = this.userPic;
    }
  }

  createList() {
    const factory = this.resolver.resolveComponentFactory(ListComponent);
    this.componentRef = this.entry.createComponent(factory);
    this.componentRef.instance.viewRef = this.componentRef;
    this.componentRef.instance.userPic = this.userPic;
  }
}
