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
import { MatInputModule, MatProgressSpinnerModule } from "@angular/material";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";

import { NavigationComponent } from "./navigation/navigation.component";
import { UserCardComponent } from "./info/user-card/user-card.component";
import { InfoComponent } from "./info/info.component";
import { ListPageComponent } from "./list-page/list-page.component";
import { ItemsComponent } from "./items/items.component";
import { SettingsCardComponent } from "./info/settings-card/settings-card.component";
import { AccountCardComponent } from "./info/account-card/account-card.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { ListComponent } from "./list-page/list/list.component";
import { NeedComponent } from "./list-page/list/need/need.component";
import { EditComponent } from "./list-page/list/edit/edit.component";
import { FilterPipe } from "./items/items.component";

import { SecurityModule } from "./security/security.module";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AlertComponent } from './alert/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserCardComponent,
    InfoComponent,
    ListPageComponent,
    SettingsCardComponent,
    AccountCardComponent,
    ListComponent,
    ItemsComponent,
    NeedComponent,
    EditComponent,
    FilterPipe,
    LandingPageComponent,
    AlertComponent
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
    SecurityModule,
    MatDialogModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ListComponent, NeedComponent, EditComponent]
})
export class AppModule {}
