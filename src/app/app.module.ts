import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";

import { NavigationComponent } from "./navigation/navigation.component";
import { UserCardComponent } from "./info/user-card/user-card.component";
import { InfoComponent } from "./info/info.component";
import { HomeComponent } from "./home/home.component";
import { ListsComponent } from "./lists/lists.component";
import { HadComponent } from "./lists/had/had.component";
import { HaveComponent } from "./lists/have/have.component";
import { WantComponent } from "./lists/want/want.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserCardComponent,
    InfoComponent,
    HomeComponent,
    ListsComponent,
    HadComponent,
    HaveComponent,
    WantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
