import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {NavbarComponent} from "./navbar.component";
import {RouterTestingModule} from "@angular/router/testing";
import {ModalTriggerButtonComponent} from "../../simple-components/modal/modal-trigger-button/modal-trigger-button.component";
import {ModalBoxBasicComponent} from "../../simple-components/modal/modal-box-basic/modal-box-basic.component";
import {RuleDetailsComponent} from "../rule-details/rule-details.component";

describe("NavbarComponent", () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent, ModalTriggerButtonComponent, ModalBoxBasicComponent, RuleDetailsComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
