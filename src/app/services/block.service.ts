import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Block} from "../models/Block.model";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";
import {CookieHelper} from "../utilities/cookie.util";

const controller = "block";

@Injectable({
  providedIn: "root"
})
export class BlockService {
  constructor(
    private http: HttpClient,
  ) {
  }

  public getAllBlocks(): Observable<Block[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Block[]>;
  }
}
