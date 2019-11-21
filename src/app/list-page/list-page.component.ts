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
  myCurrentLists: ListComponent[] = [];

  @ViewChild("listContainer", { static: false, read: ViewContainerRef })
  entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private api: UserDataService
  ) {}

  ngOnInit() {
    this.getLists();
    this.generateLists();
  }

  getLists() {
    this.api.getUser("5daf8e7b1c9d44000033bca1").subscribe(data => {
      this.myCurrentListRefs.push(data.Lists);
      console.log("The user lists are: " + data.Lists);
    });
  }

  generateLists() {
    for (var myCurrentListRef in this.myCurrentListRefs) {
      this.myCurrentLists.push(new ListComponent(null, null, myCurrentListRef));
    }
  }

  createList() {
    const factory = this.resolver.resolveComponentFactory(ListComponent);
    this.componentRef = this.entry.createComponent(factory);
    this.componentRef.instance.viewRef = this.componentRef;
  }
}
