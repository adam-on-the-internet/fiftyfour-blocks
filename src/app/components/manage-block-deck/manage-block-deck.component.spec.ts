import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ManageBlockDeckComponent } from "./manage-block-deck.component";

describe("ManageBlockDeckComponent", () => {
  let component: ManageBlockDeckComponent;
  let fixture: ComponentFixture<ManageBlockDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBlockDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBlockDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
