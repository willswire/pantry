import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InfoComponent } from "./info/info.component";
import { HomeComponent } from "./home/home.component";
import { ListsComponent } from "./lists/lists.component";
import { HadComponent } from "./lists/had/had.component";
import { HaveComponent } from "./lists/have/have.component";
import { WantComponent } from "./lists/want/want.component";

const routes: Routes = [
  { path: "**", component: HomeComponent, pathMatch: "full" },
  { path: "info", component: InfoComponent },
  { path: "lists", component: ListsComponent },
  { path: "lists/had", component: HadComponent },
  { path: "lists/have", component: HaveComponent },
  { path: "lists/want", component: WantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
