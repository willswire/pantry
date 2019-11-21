import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";
import { ListComponent } from "./list/list.component";
import { UserService } from '../security/services/user.service';

@Component({
  selector: "app-lists",
  templateUrl: "./list-page.component.html",
  styleUrls: ["./list-page.component.css"]
})
export class ListPageComponent implements OnInit {
  componentRef: any;
  userLists: [];

  @ViewChild("listContainer", { static: true, read: ViewContainerRef })
  entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver, private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsersLists().subscribe(result => console.log(result));
  }

  createList() {
    const factory = this.resolver.resolveComponentFactory(ListComponent);
    this.componentRef = this.entry.createComponent(factory);
    this.componentRef.instance.viewRef = this.componentRef;
  }
}
