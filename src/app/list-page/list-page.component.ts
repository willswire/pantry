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
    this.api.getUser("5daf8e7b1c9d44000033bca1").subscribe(data => {
      for (let list of data.Lists) {
        this.myCurrentListRefs.push(list);
      }
      console.log("The user lists are: " + data.Lists);
      this.generateLists();
    });
  }

  generateLists() {
    for (let myCurrentListRef of this.myCurrentListRefs) {
      this.createList(myCurrentListRef);
      console.log("I just generated a new list!");
    }
  }

  createList(newListRef: string) {
    const factory = this.resolver.resolveComponentFactory(ListComponent);
    this.componentRef = this.entry.createComponent(factory);
    this.componentRef.instance.viewRef = this.componentRef;
    this.componentRef.instance.listRef = newListRef;
  }
}
