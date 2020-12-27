import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {GameComponent} from "./game.component";
import {CardComponent} from "../../simple-components/card/card.component";
import {BodyComponent} from "../../simple-components/body/body.component";
import {LoadingComponent} from "../../simple-components/loading/loading.component";
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ModalTriggerButtonComponent} from "../../simple-components/modal/modal-trigger-button/modal-trigger-button.component";
import {ModalBoxBasicComponent} from "../../simple-components/modal/modal-box-basic/modal-box-basic.component";

describe("GameComponent", () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameComponent, CardComponent, BodyComponent, LoadingComponent,
        ModalTriggerButtonComponent, ModalBoxBasicComponent,
      ],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
