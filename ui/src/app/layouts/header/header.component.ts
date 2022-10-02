import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private cookieService: CookieService, private router: Router) {}
  user: any = [];
  userImg: string | undefined;
  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.user = this.cookieService.get("currentUser").slice(2);
    this.user = JSON.parse(this.user);
    this.userImg = this.user.picture;
  }

  userLogout() {
    this.cookieService.delete("currentUser");
    this.router.navigate(["/account/login"]);
  }
}
