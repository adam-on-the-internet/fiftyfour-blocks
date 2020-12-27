import {Component, OnInit} from "@angular/core";
import {BooleanHelper} from "../../utilities/boolean.util";
import {ActivatedRoute} from "@angular/router";
import {NavHelperService} from "../../services/nav-helper.service";
import {BlockDeck} from "../../models/BlockDeck.model";
import {BlockDeckService} from "../../services/block-deck.service";

@Component({
  selector: "app-block-deck-form",
  templateUrl: "./block-deck-form.component.html",
  styleUrls: ["./block-deck-form.component.scss"]
})
export class BlockDeckFormComponent implements OnInit {
  public blockDeck: BlockDeck = null;
  public showErrors = false;

  public get title(): string {
    if (this.editMode) {
      return "Edit Block Deck";
    }
    return "Create Block Deck";
  }

  public get errors(): string[] {
    const myErrors = [];
    if (this.titleInvalid) {
      myErrors.push("Please provide a title.");
    }
    if (this.descriptionInvalid) {
      myErrors.push("Please provide a description.");
    }
    if (this.typeInvalid) {
      myErrors.push("Please provide a type.");
    }
    return myErrors;
  }

  public get valid(): boolean {
    return this.errors.length === 0;
  }

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.blockDeck);
  }

  public get editMode(): boolean {
    return this.ready && BooleanHelper.hasValue(this.blockDeck._id);
  }

  private get titleInvalid(): boolean {
    return !BooleanHelper.hasValue(this.blockDeck.title);
  }

  private get descriptionInvalid(): boolean {
    return !BooleanHelper.hasValue(this.blockDeck.description);
  }

  private get typeInvalid(): boolean {
    return !BooleanHelper.hasValue(this.blockDeck.type);
  }

  constructor(
    private route: ActivatedRoute,
    private navHelper: NavHelperService,
    private blockDeckService: BlockDeckService,
  ) {
  }

  public ngOnInit() {
    this.setupForm();
  }

  public submit() {
    this.showErrors = true;
    if (this.valid) {
      this.save();
    }
  }

  private save() {
    if (this.editMode) {
      this.runEdit();
    } else {
      this.runCreate();
    }
  }

  private runEdit() {
    let response;
    this.blockDeckService.update(this.blockDeck)
      .subscribe((res) => response = res,
        (error) => {
          console.log("update failed");
        }, () => {
          this.navHelper.goToManageBlockDecks();
        });
  }

  private runCreate() {
    let response;
    this.blockDeckService.create(this.blockDeck)
      .subscribe((res) => response = res,
        (error) => {
          console.log("create failed");
        }, () => {
          this.navHelper.goToManageBlockDecks();
        });
  }

  private setupForm() {
    const urlId = this.route.snapshot.paramMap.get("id");
    if (BooleanHelper.notNull(urlId)) {
      this.setupEditForm(urlId);
    } else {
      this.setupCreateForm();
    }
  }

  private setupEditForm(id: string): void {
    this.blockDeckService.getSingle(id)
      .subscribe((res) => this.blockDeck = res,
        (error) => {
          console.log("get single failed");
        });
  }

  private setupCreateForm(): void {
    this.blockDeck = {
      title: null,
      description: null,
      type: "standard",
      tags: [],
      blocks: [],
      _id: null,
    };
  }

}
