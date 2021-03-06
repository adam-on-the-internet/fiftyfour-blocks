import {Component, OnInit} from "@angular/core";
import {LogService} from "./services/log.service";
import {SettingsService} from "./services/settings.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "fiftyfour-blocks";

  public get showNav(): boolean {
    return this.settingsService.showNav;
  }

  public get showTool(): boolean {
    return this.settingsService.showTool;
  }

  constructor(
    private logService: LogService,
    private settingsService: SettingsService,
  ) {
  }

  public ngOnInit() {
    this.logStart();
  }

  private logStart() {
    this.logService.log("info", "application visited").subscribe();
  }
}
