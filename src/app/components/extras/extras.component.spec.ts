import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ExtrasComponent} from "./extras.component";
import {BodyComponent} from "../../simple-components/body/body.component";
import {CardComponent} from "../../simple-components/card/card.component";
import {RouterTestingModule} from "@angular/router/testing";

describe("ExtrasComponent", () => {
  let component: ExtrasComponent;
  let fixture: ComponentFixture<ExtrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExtrasComponent, BodyComponent, CardComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
