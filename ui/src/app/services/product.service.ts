import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const BASE_URL = "http://localhost:4578/";

@Injectable({
  providedIn: "root"
})
export class productService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(BASE_URL);
  }
}
