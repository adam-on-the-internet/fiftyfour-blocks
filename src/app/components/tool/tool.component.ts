import {Component, OnInit} from "@angular/core";
import {RandomHelper} from "../../utilities/random.util";

@Component({
  selector: "app-tool",
  templateUrl: "./tool.component.html",
  styleUrls: ["./tool.component.scss"]
})
export class ToolComponent implements OnInit {
  public dieResult = null;
  public dieBackgroundOn = true;
  public coinResult = null;
  public coinBackgroundOn = true;

  public ngOnInit() {
    this.flipCoin();
    this.rollDie();
  }

  public flipCoin() {
    this.coinBackgroundOn = !this.coinBackgroundOn;
    this.coinResult = RandomHelper.pickRandomNumber(1, 2);
  }

  public rollDie() {
    this.dieBackgroundOn = !this.dieBackgroundOn;
    this.dieResult = RandomHelper.pickRandomNumber(1, 6);
  }

}
