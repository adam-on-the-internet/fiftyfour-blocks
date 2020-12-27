import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {RulesComponent} from "./rules.component";
import {BodyComponent} from "../../simple-components/body/body.component";
import {CardComponent} from "../../simple-components/card/card.component";
import {RuleDetailsComponent} from "../rule-details/rule-details.component";

describe("RulesComponent", () => {
  let component: RulesComponent;
  let fixture: ComponentFixture<RulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RulesComponent, BodyComponent, CardComponent, RuleDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
