import {Component, OnInit} from "@angular/core";
import {BlockDeck} from "../../models/BlockDeck.model";
import {BooleanHelper} from "../../utilities/boolean.util";
import {BlockDeckService} from "../../services/block-deck.service";
import {ActivatedRoute} from "@angular/router";
import {Block} from "../../models/Block.model";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.scss"]
})
export class GameComponent implements OnInit {
  public blockDeck: BlockDeck = null;

  public selectedBlockNumber = null;
  public selectedBlock: Block = null;
  public nextBlockNumber: number = null;

  public incorrectSelection = false;

  public get ready(): boolean {
    return BooleanHelper.notNull(this.blockDeck);
  }

  constructor(
    private blockDeckService: BlockDeckService,
    private route: ActivatedRoute,
  ) {
  }

  public ngOnInit() {
    this.loadContent();
  }

  public selectBlock() {
    this.incorrectSelection = false;
    if (this.nextBlockNumber > 0 && this.nextBlockNumber <= this.blockDeck.blocks.length) {
      this.selectedBlockNumber = this.nextBlockNumber;
      this.selectedBlock = this.blockDeck.blocks[this.selectedBlockNumber - 1];
    } else {
      this.incorrectSelection = true;
    }
    this.nextBlockNumber = null;
  }

  private loadContent(): void {
    const id = this.route.snapshot.paramMap.get("deckId");
    this.blockDeckService.getSingle(id)
      .subscribe((res) => this.blockDeck = res,
        (error) => {
          console.log("load content failed");
        });
  }


}
