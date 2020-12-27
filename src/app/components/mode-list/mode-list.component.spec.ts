import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ModeListComponent} from "./mode-list.component";
import {CardComponent} from "../../simple-components/card/card.component";
import {BodyComponent} from "../../simple-components/body/body.component";
import {LoadingComponent} from "../../simple-components/loading/loading.component";

describe("ModeListComponent", () => {
  let component: ModeListComponent;
  let fixture: ComponentFixture<ModeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModeListComponent, CardComponent, BodyComponent, LoadingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
