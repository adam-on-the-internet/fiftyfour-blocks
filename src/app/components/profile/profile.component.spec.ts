import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ProfileComponent} from "./profile.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HeaderComponent} from "../../simple-components/header/header.component";
import {BodyComponent} from "../../simple-components/body/body.component";
import {CardComponent} from "../../simple-components/card/card.component";

describe("ProfileComponent", () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent, HeaderComponent, BodyComponent, CardComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
