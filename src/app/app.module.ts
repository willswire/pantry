import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatRadioModule } from "@angular/material/radio";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material";
import { MatDialogModule } from "@angular/material/dialog";

import { NavigationComponent } from "./navigation/navigation.component";
import { UserCardComponent } from "./info/user-card/user-card.component";
import { InfoComponent } from "./info/info.component";
import { HomeComponent } from "./home/home.component";
import { ListPageComponent } from "./list-page/list-page.component";
import { SettingsCardComponent } from "./info/settings-card/settings-card.component";
import { AccountCardComponent } from "./info/account-card/account-card.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { ListComponent } from "./list-page/list/list.component";
import { HaveComponent } from "./list-page/list/have/have.component";
import { NeedComponent } from "./list-page/list/need/need.component";
import { EditComponent } from "./list-page/list/edit/edit.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserCardComponent,
    InfoComponent,
    HomeComponent,
    ListPageComponent,
    SettingsCardComponent,
    AccountCardComponent,
    ListComponent,
    HaveComponent,
    NeedComponent,
    EditComponent
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
    MatListModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ListComponent, HaveComponent, NeedComponent, EditComponent]
})
export class AppModule {}
