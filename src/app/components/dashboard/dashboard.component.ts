import {Component, OnInit} from "@angular/core";
import {NavHelperService} from "src/app/services/nav-helper.service";
import {SettingsService} from "../../services/settings.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {

  constructor(
    private navHelper: NavHelperService,
    private settings: SettingsService,
  ) {
    this.settings.showNav = true;
  }

  public ngOnInit() {
  }

  public goToInfo() {
    this.navHelper.goToInfo();
  }

  public goToBlockDeckList() {
    this.navHelper.goToBlockDeckList();
  }

  public goToBlockList() {
    this.navHelper.goToBlockList();
  }

  public goToPlay() {
    this.navHelper.goToGameSetup();
  }

}
