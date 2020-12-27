import {async, TestBed} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToolComponent} from "./components/tool/tool.component";
import {RuleDetailsComponent} from "./components/rule-details/rule-details.component";
import {ModalBoxBasicComponent} from "./simple-components/modal/modal-box-basic/modal-box-basic.component";
import {ModalTriggerButtonComponent} from "./simple-components/modal/modal-trigger-button/modal-trigger-button.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, NavbarComponent, FooterComponent, ToolComponent,
        RuleDetailsComponent, ModalBoxBasicComponent, ModalTriggerButtonComponent,
      ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fiftyfour-blocks'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("fiftyfour-blocks");
  });
});
