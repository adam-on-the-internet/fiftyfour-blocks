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

  public getAll(): Observable<Block[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Block[]>;
  }

  public getSingle(blockId: string): Observable<Block> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      params: blockId
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Block>;
  }

  public update(block: Block): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.put(url, block, CookieHelper.authHeaders) as Observable<any>;
  }

  public create(block: Block): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.post(url, block, CookieHelper.authHeaders) as Observable<any>;
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
