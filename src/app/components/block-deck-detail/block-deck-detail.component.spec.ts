import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {BlockDeckDetailComponent} from "./block-deck-detail.component";
import {LoadingComponent} from "../loading/loading.component";
import {CardComponent} from "../card/card.component";
import {BodyComponent} from "../body/body.component";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("BlockDeckDetailComponent", () => {
  let component: BlockDeckDetailComponent;
  let fixture: ComponentFixture<BlockDeckDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlockDeckDetailComponent, LoadingComponent, CardComponent, BodyComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockDeckDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
