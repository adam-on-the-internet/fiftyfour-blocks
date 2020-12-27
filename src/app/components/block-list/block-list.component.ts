import {Component, OnInit} from "@angular/core";
import {BlockService} from "../../services/block.service";
import {Block} from "../../models/Block.model";

@Component({
  selector: "app-block-list",
  templateUrl: "./block-list.component.html",
  styleUrls: ["./block-list.component.scss"]
})
export class BlockListComponent implements OnInit {
  public blocks: Block[] = null;

  public get ready(): boolean {
    return this.blocks !== null;
  }

  constructor(
    private blockService: BlockService,
  ) {
  }

  public ngOnInit() {
    this.loadBlocks();
  }

  private loadBlocks() {
    this.blockService.getAllBlocks()
      .subscribe((res) => this.blocks = res,
        () => {

        },
        () => {

        });
  }

}
