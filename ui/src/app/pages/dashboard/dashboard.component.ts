import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor(private cookieService: CookieService, private router: Router) {}
  user: any = [];
  userImg: string | undefined;
  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.user = this.cookieService.get("currentUser").slice(2);
    this.userImg = JSON.parse(this.user).picture;
  }

  userLogout() {
    this.cookieService.delete("currentUser");
    this.router.navigate(["/login"]);
  }
}
