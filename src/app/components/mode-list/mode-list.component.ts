import {Component, OnInit} from "@angular/core";
import {MODES} from "../../constants/mode.constants";
import {Mode} from "../../models/Mode.model";

@Component({
  selector: "app-mode-list",
  templateUrl: "./mode-list.component.html",
  styleUrls: ["./mode-list.component.scss"]
})
export class ModeListComponent implements OnInit {
  public modes: Mode[] = null;

  public get ready(): boolean {
    return this.modes !== null;
  }

  public ngOnInit() {
    this.loadModes();
  }

  private loadModes() {
    this.modes = MODES;
  }

}
