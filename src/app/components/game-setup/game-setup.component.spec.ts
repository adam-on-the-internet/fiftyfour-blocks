import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {GameSetupComponent} from "./game-setup.component";
import {CardComponent} from "../../simple-components/card/card.component";
import {LoadingComponent} from "../../simple-components/loading/loading.component";
import {BodyComponent} from "../../simple-components/body/body.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe("GameSetupComponent", () => {
  let component: GameSetupComponent;
  let fixture: ComponentFixture<GameSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameSetupComponent, CardComponent, LoadingComponent, BodyComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
