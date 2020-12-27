import {Component} from "@angular/core";
import {NavHelperService} from "../../services/nav-helper.service";

@Component({
  selector: "app-extras",
  templateUrl: "./extras.component.html",
  styleUrls: ["./extras.component.scss"]
})
export class ExtrasComponent {

  constructor(
    private navHelper: NavHelperService,
  ) {
  }

  public goToBlockDeckList() {
    this.navHelper.goToBlockDeckList();
  }

  public goToModeList() {
    this.navHelper.goToModeList();
  }

  public goToAppInfo() {
    this.navHelper.goToInfo();
  }

  public goToBlockList() {
    this.navHelper.goToBlockList();
  }

  public goToRules() {
    this.navHelper.goToRules();
  }

}
