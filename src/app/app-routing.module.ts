import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InfoComponent } from "./info/info.component";
import { HomeComponent } from "./home/home.component";
import { ListPageComponent } from "./list-page/list-page.component";
import { RegisterComponent } from './security/components/register/register.component';
import { LoginComponent } from './security/components/login/login.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "info", component: InfoComponent },
  { path: "lists", component: ListPageComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
