import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {BlockFormComponent} from "./block-form.component";
import {LoadingComponent} from "../loading/loading.component";
import {FormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {CardComponent} from "../card/card.component";
import {BodyComponent} from "../body/body.component";

describe("BlockFormComponent", () => {
  let component: BlockFormComponent;
  let fixture: ComponentFixture<BlockFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlockFormComponent, LoadingComponent, CardComponent, BodyComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
