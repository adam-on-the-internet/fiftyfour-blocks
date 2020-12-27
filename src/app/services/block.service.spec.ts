import {TestBed} from "@angular/core/testing";

import {BlockService} from "./block.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("BlockService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it("should be created", () => {
    const service: BlockService = TestBed.get(BlockService);
    expect(service).toBeTruthy();
  });
});
