import {Component} from "@angular/core";
import {NavHelperService} from "src/app/services/nav-helper.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent {
  constructor(
    private navHelper: NavHelperService,
  ) {
  }

  public manageBlocks() {
    this.navHelper.goToManageBlocks();
  }

  public manageBlockDecks() {
    this.navHelper.goToManageBlockDecks();
  }

}
