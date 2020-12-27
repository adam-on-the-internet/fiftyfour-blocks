import {Component, OnInit} from "@angular/core";
import {BooleanHelper} from "../../utilities/boolean.util";
import {ActivatedRoute} from "@angular/router";
import {BlockDeckService} from "../../services/block-deck.service";
import {BlockDeck} from "../../models/BlockDeck.model";

@Component({
  selector: "app-block-deck-detail",
  templateUrl: "./block-deck-detail.component.html",
  styleUrls: ["./block-deck-detail.component.scss"]
})
export class BlockDeckDetailComponent implements OnInit {
  public blockDeck: BlockDeck = null;

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

  private loadContent(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.blockDeckService.getSingle(id)
      .subscribe((res) => this.blockDeck = res,
        (error) => {
          console.log("load content failed");
        });
  }

}
