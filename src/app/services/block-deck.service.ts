import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";
import {CookieHelper} from "../utilities/cookie.util";
import {BlockDeck} from "../models/BlockDeck.model";

const controller = "blockDeck";

@Injectable({
  providedIn: "root"
})
export class BlockDeckService {
  constructor(
    private http: HttpClient,
  ) {
  }

  public getAll(): Observable<BlockDeck[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<BlockDeck[]>;
  }

  public getSingle(blockId: string): Observable<BlockDeck> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      params: blockId
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<BlockDeck>;
  }

  public update(blockDeck: BlockDeck): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.put(url, blockDeck, CookieHelper.authHeaders) as Observable<any>;
  }

  public create(blockDeck: BlockDeck): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.post(url, blockDeck, CookieHelper.authHeaders) as Observable<any>;
  }

  public delete(id: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      params: id,
    });
    return this.http.delete(url, CookieHelper.authHeaders) as Observable<any>;
  }
}
