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
import {HeaderComponent} from "./simple-components/header/header.component";
import {BodyComponent} from "./simple-components/body/body.component";
import {LoadingComponent} from "./simple-components/loading/loading.component";
import {CardComponent} from "./simple-components/card/card.component";
import {BodyAltComponent} from "./simple-components/body-alt/body-alt.component";
import {BlockListComponent} from "./components/block-list/block-list.component";
import {BlockDeckListComponent} from "./components/block-deck-list/block-deck-list.component";
import {BlockFormComponent} from "./components/block-form/block-form.component";
import {ManageBlockComponent} from "./components/manage-block/manage-block.component";
import {ManageBlockDeckComponent} from "./components/manage-block-deck/manage-block-deck.component";
import {BlockDetailComponent} from "./components/block-detail/block-detail.component";
import {BlockDeckFormComponent} from "./components/block-deck-form/block-deck-form.component";
import {BlockDeckDetailComponent} from "./components/block-deck-detail/block-deck-detail.component";
import {ToolComponent} from "./components/tool/tool.component";
import {GameSetupComponent} from "./components/game-setup/game-setup.component";
import {GameComponent} from "./components/game/game.component";
import {ModalBoxBasicComponent} from "./simple-components/modal/modal-box-basic/modal-box-basic.component";
import {ModalTriggerButtonComponent} from "./simple-components/modal/modal-trigger-button/modal-trigger-button.component";
import {RulesComponent} from "./components/rules/rules.component";
import {ExtrasComponent} from "./components/extras/extras.component";
import {RuleDetailsComponent} from "./components/rule-details/rule-details.component";
import {ModeListComponent} from "./components/mode-list/mode-list.component";

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
    ToolComponent,
    GameSetupComponent,
    GameComponent,
    ModalBoxBasicComponent,
    ModalTriggerButtonComponent,
    RulesComponent,
    ExtrasComponent,
    RuleDetailsComponent,
    ModeListComponent,
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
