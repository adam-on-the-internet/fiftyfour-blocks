import { Component, OnInit } from "@angular/core";
import {BlockService} from "../../services/block.service";
import {ActivatedRoute} from "@angular/router";
import {BooleanHelper} from "../../utilities/boolean.util";
import {Block} from "../../models/Block.model";

@Component({
  selector: "app-block-detail",
  templateUrl: "./block-detail.component.html",
  styleUrls: ["./block-detail.component.scss"]
})
export class BlockDetailComponent implements OnInit {
  public block: Block = null;

  public get ready(): boolean {
    return BooleanHelper.notNull(this.block);
  }

  constructor(
    private blockService: BlockService,
    private route: ActivatedRoute,
  ) { }

  public ngOnInit() {
    this.loadContent();
  }

  private loadContent(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.blockService.getSingle(id)
      .subscribe((res) => this.block = res,
        (error) => {
          console.log("load content failed");
        });
  }

}
