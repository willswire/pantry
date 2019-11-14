import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory
} from "@angular/core";
import { ListComponent } from "./list/list.component";

@Component({
  selector: "app-lists",
  templateUrl: "./lists.component.html",
  styleUrls: ["./lists.component.css"]
})
export class ListsComponent implements OnInit {
  //myLists: ListComponent[] = [];
  componentRef: any;

  @ViewChild("listContainer", { static: true, read: ViewContainerRef })
  entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {}

  createList() {
    const factory = this.resolver.resolveComponentFactory(ListComponent);
    this.componentRef = this.entry.createComponent(factory);
    this.componentRef.instance.viewRef = this.componentRef;
  }

  /*   createList() {
    console.log("creating a new list");
    this.myLists.push(null);
  } */
}
