import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InfoComponent } from "./info/info.component";
import { ListPageComponent } from "./list-page/list-page.component";

const routes: Routes = [
  { path: "", component: ListPageComponent, pathMatch: "full" },
  { path: "info", component: InfoComponent },
  { path: "lists", component: ListPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
