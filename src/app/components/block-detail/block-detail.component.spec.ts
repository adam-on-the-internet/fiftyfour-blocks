import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {BlockDetailComponent} from "./block-detail.component";
import {LoadingComponent} from "../loading/loading.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {CardComponent} from "../card/card.component";
import {BodyComponent} from "../body/body.component";
import {RouterTestingModule} from "@angular/router/testing";

describe("BlockDetailComponent", () => {
  let component: BlockDetailComponent;
  let fixture: ComponentFixture<BlockDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlockDetailComponent, LoadingComponent, CardComponent, BodyComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
