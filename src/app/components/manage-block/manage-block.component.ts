import { Component, OnInit } from "@angular/core";
import {Block} from "../../models/Block.model";
import {NavHelperService} from "../../services/nav-helper.service";
import {BlockService} from "../../services/block.service";

@Component({
  selector: "app-manage-block",
  templateUrl: "./manage-block.component.html",
  styleUrls: ["./manage-block.component.scss"]
})
export class ManageBlockComponent implements OnInit {
  public blocks: Block[] = null;

  public get ready(): boolean {
    return this.blocks !== null;
  }

  public get hasContent(): boolean {
    return this.blocks.length > 0;
  }


  constructor(
    private blockService: BlockService,
    private navHelper: NavHelperService,
  ) { }

  public ngOnInit() {
    this.loadBlocks();
  }

  public goToDetails(block: Block): void {
    this.navHelper.goToBlockDetails(block._id);
  }

  public create(): void {
    this.navHelper.goToBlockCreate();
  }

  public edit(block: Block): void {
    this.navHelper.goToBlockEdit(block._id);
  }

  public requestDelete(block: Block): void {
    const confirmDelete = confirm(`Are you sure you want to delete ${block.title}?`);
    if (confirmDelete) {
      this.delete(block);
    }
  }

  private delete(block: Block): void {
    let response;
    this.blockService.delete(block._id)
      .subscribe((res) => response = res,
        (error) => {
          console.log("delete block failed");
        }, () => {
          this.loadBlocks();
        });
  }

  private loadBlocks(): void {
    this.blocks = null;
    this.blockService.getAll()
      .subscribe((res) => this.blocks = res,
        (error) => {
          console.log("get blocks failed");
        });
  }

}
