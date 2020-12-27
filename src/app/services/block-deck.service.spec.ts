import {TestBed} from "@angular/core/testing";

import {BlockDeckService} from "./block-deck.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("BlockDeckService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it("should be created", () => {
    const service: BlockDeckService = TestBed.get(BlockDeckService);
    expect(service).toBeTruthy();
  });
});
