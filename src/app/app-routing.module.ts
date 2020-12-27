import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {InfoComponent} from "./components/info/info.component";
import {ROUTES_ENUM} from "./constants/routing.constants";
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AdminComponent} from "./components/admin/admin.component";
import {BlockListComponent} from "./components/block-list/block-list.component";
import {BlockDeckListComponent} from "./components/block-deck-list/block-deck-list.component";
import {ManageBlockComponent} from "./components/manage-block/manage-block.component";
import {ManageBlockDeckComponent} from "./components/manage-block-deck/manage-block-deck.component";
import {BlockDetailComponent} from "./components/block-detail/block-detail.component";
import {BlockFormComponent} from "./components/block-form/block-form.component";

const routes: Routes = [
  // main
  {path: ROUTES_ENUM.Dashboard, component: DashboardComponent},
  {path: ROUTES_ENUM.Info, component: InfoComponent},
  {path: ROUTES_ENUM.Login, component: LoginComponent},
  {path: ROUTES_ENUM.Profile, component: ProfileComponent},
  {path: ROUTES_ENUM.Admin, component: AdminComponent},
  // block
  {path: ROUTES_ENUM.BlockList, component: BlockListComponent},
  {path: ROUTES_ENUM.BlockDeckList, component: BlockDeckListComponent},
  // admin
  {path: ROUTES_ENUM.ManageBlock, component: ManageBlockComponent},
  {path: ROUTES_ENUM.BlockForm, component: BlockFormComponent},
  {path: ROUTES_ENUM.BlockForm + "/:id", component: BlockFormComponent},
  {path: ROUTES_ENUM.BlockDetails + "/:id", component: BlockDetailComponent},
  {path: ROUTES_ENUM.ManageBlockDeck, component: ManageBlockDeckComponent},
  // default
  {path: "**", redirectTo: "dashboard"},
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}
