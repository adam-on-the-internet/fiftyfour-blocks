import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {AdminComponent} from "./admin.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {ActuatorReportComponent} from "../actuator-report/actuator-report.component";
import {HeaderComponent} from "../../simple-components/header/header.component";
import {BodyComponent} from "../../simple-components/body/body.component";
import {LoadingComponent} from "../../simple-components/loading/loading.component";
import {CardComponent} from "../../simple-components/card/card.component";

describe("AdminComponent", () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminComponent, ActuatorReportComponent, HeaderComponent, BodyComponent, LoadingComponent,
        CardComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
