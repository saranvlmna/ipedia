import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.cookieService.get("currentUser").slice(2);
    let isAdmin: any;
    currentUser ? (isAdmin = JSON.parse(currentUser).isAdmin) : null;

    if (currentUser) {
      // logged in so return true

      if (state.url.substring(0, 6) == "/admin") {
        if (isAdmin) {
          return true;
        }
      } else {
        if (!isAdmin) {
          return true;
        }
      }
    }

    // not logged in so redirect to login page with the return url
    if (state.url.substring(0, 6) == "/admin") {
      this.router.navigate(["/account/admin"]);
    } else {
      this.router.navigate(["/account/login"]);
    }
    return false;
  }
}
