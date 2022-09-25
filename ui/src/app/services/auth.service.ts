import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const BASE_URL = "/api/auth";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(data: any) {
    return this.http.post(`${BASE_URL}/signup`, data);
  }

  login(data: any) {
    return this.http.post(`${BASE_URL}/login`, data);
  }

  googleAuth() {
    // return this.http.get(`${BASE_URL}auth/google`);
    return (window.location.href = `${BASE_URL}/google`);
  }
  getUser() {
    return this.http.get(`${BASE_URL}/user`);
  }
}
