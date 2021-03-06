import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {BlockDeckListComponent} from "./block-deck-list.component";
import {LoadingComponent} from "../../simple-components/loading/loading.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {CardComponent} from "../../simple-components/card/card.component";
import {BodyComponent} from "../../simple-components/body/body.component";

describe("BlockDeckListComponent", () => {
  let component: BlockDeckListComponent;
  let fixture: ComponentFixture<BlockDeckListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlockDeckListComponent, LoadingComponent, CardComponent, BodyComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockDeckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
