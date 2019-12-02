import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InfoComponent } from "./info/info.component";
import { ListPageComponent } from "./list-page/list-page.component";
import { ItemsComponent } from "./items/items.component";
import { RegisterComponent } from "./security/components/register/register.component";
import { LoginComponent } from "./security/components/login/login.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AuthGuard } from './security/guards/auth.guard';
import { NoauthGuard } from './security/guards/noauth.guard';
import { ForgotPasswordComponent } from './security/components/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: "", component: LandingPageComponent, pathMatch: "full" },
  {
    path: "info",
    component: InfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "lists",
    component: ListPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "items",
    component: ItemsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [NoauthGuard],
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [NoauthGuard],
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
    canActivate: [NoauthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
