import {Component, OnInit} from "@angular/core";
import {Block} from "../../models/Block.model";
import {NavHelperService} from "../../services/nav-helper.service";
import {BlockDeckService} from "../../services/block-deck.service";
import {BlockDeck} from "../../models/BlockDeck.model";

@Component({
  selector: "app-manage-block-deck",
  templateUrl: "./manage-block-deck.component.html",
  styleUrls: ["./manage-block-deck.component.scss"]
})
export class ManageBlockDeckComponent implements OnInit {
  public blockDecks: BlockDeck[] = null;

  public get ready(): boolean {
    return this.blockDecks !== null;
  }

  public get hasContent(): boolean {
    return this.blockDecks.length > 0;
  }

  constructor(
    private blockDeckService: BlockDeckService,
    private navHelper: NavHelperService,
  ) {
  }

  public ngOnInit() {
    this.loadContent();
  }

  public goToDetails(blockDeck: BlockDeck): void {
    this.navHelper.goToBlockDeckDetails(blockDeck._id);
  }

  public create(): void {
    this.navHelper.goToBlockDeckCreate();
  }

  public edit(blockDeck: BlockDeck): void {
    this.navHelper.goToBlockDeckEdit(blockDeck._id);
  }

  public requestDelete(blockDeck: BlockDeck): void {
    const confirmDelete = confirm(`Are you sure you want to delete ${blockDeck.title}?`);
    if (confirmDelete) {
      this.delete(blockDeck);
    }
  }

  private delete(blockDeck: BlockDeck): void {
    let response;
    this.blockDeckService.delete(blockDeck._id)
      .subscribe((res) => response = res,
        (error) => {
          console.log("delete failed");
        }, () => {
          this.loadContent();
        });
  }

  private loadContent(): void {
    this.blockDecks = null;
    this.blockDeckService.getAll()
      .subscribe((res) => this.blockDecks = res,
        (error) => {
          console.log("load content failed");
        });
  }

}
