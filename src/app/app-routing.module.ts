import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InfoComponent } from "./info/info.component";
import { ListPageComponent } from "./list-page/list-page.component";
import { ItemsComponent } from "./items/items.component";
import { RegisterComponent } from "./security/components/register/register.component";
import { LoginComponent } from "./security/components/login/login.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const routes: Routes = [
  { path: "", component: LandingPageComponent, pathMatch: "full" },
  { path: "info", component: InfoComponent },
  { path: "lists", component: ListPageComponent },
  { path: "items", component: ItemsComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
