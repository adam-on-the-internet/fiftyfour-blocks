import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ManageBlockComponent} from "./manage-block.component";
import {LoadingComponent} from "../../simple-components/loading/loading.component";
import {CardComponent} from "../../simple-components/card/card.component";
import {BodyComponent} from "../../simple-components/body/body.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe("ManageBlockComponent", () => {
  let component: ManageBlockComponent;
  let fixture: ComponentFixture<ManageBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageBlockComponent, LoadingComponent, CardComponent, BodyComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
