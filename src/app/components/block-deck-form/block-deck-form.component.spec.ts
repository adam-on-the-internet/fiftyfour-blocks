import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {BlockDeckFormComponent} from "./block-deck-form.component";
import {LoadingComponent} from "../../simple-components/loading/loading.component";
import {CardComponent} from "../../simple-components/card/card.component";
import {BodyComponent} from "../../simple-components/body/body.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule} from "@angular/forms";

describe("BlockDeckFormComponent", () => {
  let component: BlockDeckFormComponent;
  let fixture: ComponentFixture<BlockDeckFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlockDeckFormComponent, LoadingComponent, CardComponent, BodyComponent, ],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockDeckFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
