import {Component, OnInit} from "@angular/core";
import {Block} from "../../models/Block.model";
import {BooleanHelper} from "../../utilities/boolean.util";
import {ActivatedRoute} from "@angular/router";
import {BlockService} from "../../services/block.service";
import {NavHelperService} from "../../services/nav-helper.service";

@Component({
  selector: "app-block-form",
  templateUrl: "./block-form.component.html",
  styleUrls: ["./block-form.component.scss"]
})
export class BlockFormComponent implements OnInit {
  public block: Block = null;
  public showErrors = false;

  public get title(): string {
    if (this.editMode) {
      return "Edit Block";
    }
    return "Create Block";
  }

  public get errors(): string[] {
    const myErrors = [];
    if (this.titleInvalid) {
      myErrors.push("Please provide a title.");
    }
    if (this.ruleInvalid) {
      myErrors.push("Please provide a rule.");
    }
    return myErrors;
  }

  public get valid(): boolean {
    return this.errors.length === 0;
  }

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.block);
  }

  public get editMode(): boolean {
    return this.ready && BooleanHelper.hasValue(this.block._id);
  }

  private get titleInvalid(): boolean {
    return !BooleanHelper.hasValue(this.block.title);
  }

  private get ruleInvalid(): boolean {
    return !BooleanHelper.hasValue(this.block.rule);
  }

  constructor(
    private route: ActivatedRoute,
    private navHelper: NavHelperService,
    private blockService: BlockService,
  ) {
  }

  public ngOnInit() {
    this.setupForm();
  }

  public updateBlockRule(event) {
    this.block.rule = event.target.value;
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
    this.blockService.update(this.block)
      .subscribe((res) => response = res,
        (error) => {
          console.log("update failed");
        }, () => {
          this.navHelper.goToManageBlocks();
        });
  }

  private runCreate() {
    let response;
    this.blockService.create(this.block)
      .subscribe((res) => response = res,
        (error) => {
          console.log("create failed");
        }, () => {
          this.navHelper.goToManageBlocks();
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
    this.blockService.getSingle(id)
      .subscribe((res) => this.block = res,
        (error) => {
          console.log("get single failed");
        });
  }

  private setupCreateForm(): void {
    this.block = {
      title: null,
      rule: null,
      tags: [],
      _id: null,
    };
  }

}
