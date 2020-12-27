import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {BlockListComponent} from "./block-list.component";
import {LoadingComponent} from "../loading/loading.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {CardComponent} from "../card/card.component";
import {BodyComponent} from "../body/body.component";

describe("BlockListComponent", () => {
  let component: BlockListComponent;
  let fixture: ComponentFixture<BlockListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlockListComponent, LoadingComponent, CardComponent, BodyComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
