import {Component, OnInit} from "@angular/core";
import {BlockDeck} from "../../models/BlockDeck.model";
import {BlockDeckService} from "../../services/block-deck.service";
import {NavHelperService} from "../../services/nav-helper.service";
import {Mode} from "../../models/Mode.model";
import {MODES} from "../../constants/mode.constants";

@Component({
  selector: "app-game-setup",
  templateUrl: "./game-setup.component.html",
  styleUrls: ["./game-setup.component.scss"]
})
export class GameSetupComponent implements OnInit {
  public blockDecks: BlockDeck[] = null;
  public modes: Mode[] = null;

  public selectedDeck: BlockDeck = null;
  public selectedMode: Mode = null;

  public get canStartGame(): boolean {
    return this.selectedDeck !== null && this.selectedMode !== null;
  }

  public get ready(): boolean {
    return this.blockDecks !== null && this.modes !== null;
  }

  constructor(
    private blockDeckService: BlockDeckService,
    private navHelperService: NavHelperService,
  ) {
  }

  public ngOnInit() {
    this.loadBlockDecks();
    this.loadModes();
  }

  public selectMode(mode: Mode) {
    this.selectedMode = mode;
  }

  public selectDeck(deck: BlockDeck) {
    this.selectedDeck = deck;
  }

  public startGame() {
    if (this.canStartGame) {
      this.navHelperService.goToGame(this.selectedDeck._id, this.selectedMode._id);
    }
  }

  private loadModes() {
    this.modes = MODES;
    this.selectMode(this.modes[0]);
  }

  private loadBlockDecks() {
    this.blockDeckService.getAll()
      .subscribe((res) => this.blockDecks = res,
        () => {

        },
        () => {
          this.selectDeck(this.blockDecks[0]);
        });
  }

}
