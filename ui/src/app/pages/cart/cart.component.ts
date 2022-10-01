import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/services/cart.service";
import { CookieService } from "ngx-cookie-service";
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private cokkieService: CookieService
  ) {}
  user: any;
  userId: any;
  cartList: any[] = [];
  ngOnInit(): void {
    this.user = this.cokkieService.get("currentUser").slice(2);
    this.userId = JSON.parse(this.user)._id;
    this.getUserCart();
  }

  getUserCart() {
    this.cartService.get(this.userId).subscribe((res: any) => {
      this.cartList = res.data;
      console.log(this.cartList);
    });
  }
}
