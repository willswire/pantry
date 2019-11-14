import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InfoComponent } from "./info/info.component";
import { HomeComponent } from "./home/home.component";
import { ListsComponent } from "./lists/lists.component";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "info", component: InfoComponent },
  { path: "lists", component: ListsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
