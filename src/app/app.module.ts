import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {InfoComponent} from "./components/info/info.component";
import {AppRoutingModule} from "./app-routing.module";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HttpClientModule} from "@angular/common/http";
import {ActuatorReportComponent} from "./components/actuator-report/actuator-report.component";
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AdminComponent} from "./components/admin/admin.component";
import {HeaderComponent} from "./components/header/header.component";
import {BodyComponent} from "./components/body/body.component";
import {LoadingComponent} from "./components/loading/loading.component";
import {CardComponent} from "./components/card/card.component";
import {BodyAltComponent} from "./components/body-alt/body-alt.component";
import {BlockListComponent} from "./components/block-list/block-list.component";
import {BlockDeckListComponent} from "./components/block-deck-list/block-deck-list.component";
import {BlockFormComponent} from "./components/block-form/block-form.component";
import {ManageBlockComponent} from "./components/manage-block/manage-block.component";
import {ManageBlockDeckComponent} from "./components/manage-block-deck/manage-block-deck.component";
import {BlockDetailComponent} from "./components/block-detail/block-detail.component";
import {BlockDeckFormComponent} from "./components/block-deck-form/block-deck-form.component";
import {BlockDeckDetailComponent} from "./components/block-deck-detail/block-deck-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InfoComponent,
    NavbarComponent,
    FooterComponent,
    ActuatorReportComponent,
    LoginComponent,
    ProfileComponent,
    AdminComponent,
    HeaderComponent,
    BodyComponent,
    LoadingComponent,
    CardComponent,
    BodyAltComponent,
    BlockListComponent,
    BlockDeckListComponent,
    BlockFormComponent,
    ManageBlockComponent,
    ManageBlockDeckComponent,
    BlockDetailComponent,
    BlockDeckFormComponent,
    BlockDeckDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
