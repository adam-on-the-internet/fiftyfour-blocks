import { Component, OnInit } from "@angular/core";
import {Block} from "../../models/Block.model";
import {BlockService} from "../../services/block.service";
import {BlockDeckService} from "../../services/block-deck.service";
import {BlockDeck} from "../../models/BlockDeck.model";

@Component({
  selector: "app-block-deck-list",
  templateUrl: "./block-deck-list.component.html",
  styleUrls: ["./block-deck-list.component.scss"]
})
export class BlockDeckListComponent implements OnInit {
  public blockDecks: BlockDeck[] = null;

  public get ready(): boolean {
    return this.blockDecks !== null;
  }

  constructor(
    private blockDeckService: BlockDeckService,
  ) {
  }

  public ngOnInit() {
    this.loadBlockDecks();
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
