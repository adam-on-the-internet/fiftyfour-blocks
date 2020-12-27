import {Component, OnInit} from "@angular/core";
import {BlockDeck} from "../../models/BlockDeck.model";
import {BlockDeckService} from "../../services/block-deck.service";
import {NavHelperService} from "../../services/nav-helper.service";

@Component({
  selector: "app-game-setup",
  templateUrl: "./game-setup.component.html",
  styleUrls: ["./game-setup.component.scss"]
})
export class GameSetupComponent implements OnInit {
  public blockDecks: BlockDeck[] = null;

  public get ready(): boolean {
    return this.blockDecks !== null;
  }

  constructor(
    private blockDeckService: BlockDeckService,
    private navHelperService: NavHelperService,
  ) {
  }

  public ngOnInit() {
    this.loadBlockDecks();
  }

  public selectDeck(deck: BlockDeck) {
    this.navHelperService.goToGame(deck._id);
  }

  private loadBlockDecks() {
    this.blockDeckService.getAll()
      .subscribe((res) => this.blockDecks = res,
        () => {

        },
        () => {

        });
  }

}
