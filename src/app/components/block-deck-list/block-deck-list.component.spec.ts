import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BlockDeckListComponent } from "./block-deck-list.component";

describe("BlockDeckListComponent", () => {
  let component: BlockDeckListComponent;
  let fixture: ComponentFixture<BlockDeckListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockDeckListComponent ]
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
