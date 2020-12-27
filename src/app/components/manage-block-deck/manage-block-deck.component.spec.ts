import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ManageBlockDeckComponent} from "./manage-block-deck.component";
import {LoadingComponent} from "../../simple-components/loading/loading.component";
import {CardComponent} from "../../simple-components/card/card.component";
import {BodyComponent} from "../../simple-components/body/body.component";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("ManageBlockDeckComponent", () => {
  let component: ManageBlockDeckComponent;
  let fixture: ComponentFixture<ManageBlockDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageBlockDeckComponent, LoadingComponent, CardComponent, BodyComponent, ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBlockDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
