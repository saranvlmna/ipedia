import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const BASE_URL = "api/cart/";

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor(private http: HttpClient) {}

  add(prdId: string, usrId: string) {
    return this.http.post(`${BASE_URL}` + "add/" + prdId + "/" + usrId, {});
  }
}
