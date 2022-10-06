import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/services/cart.service";
import { CookieService } from "ngx-cookie-service";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  // winRef: any;
  constructor(
    private cartService: CartService,
    private cokkieService: CookieService,
    private formBuilder: FormBuilder
  ) {}
  user: any;
  userId: any;
  cartList: any[] = [];
  checkoutForm: FormGroup | any;

  ngOnInit(): void {
    this.user = this.cokkieService.get("currentUser").slice(2);
    this.userId = JSON.parse(this.user)._id;
    this.getUserCart();
    this.initializeCheckoutForm();
  }

  private initializeCheckoutForm() {
    this.checkoutForm = this.formBuilder.group({
      user: [""],
      paymentType: [""],
      price: [""],
      deliveryAddress: [""],
      products: [""]
    });
  }

  getUserCart() {
    this.cartService.get(this.userId).subscribe((res: any) => {
      this.cartList = res.data;
    });
  }

  deleteProduct(prdId: any) {
    this.cartService.delete(this.userId, prdId).subscribe((res: any) => {
      this.getUserCart();
    });
  }

  updateProduct(prdId: any, action: any) {
    this.cartService
      .update(this.userId, prdId, action)
      .subscribe((res: any) => {
        this.getUserCart();
      });
  }

  checkout() {
    this.checkoutForm.value.price = this.cartList[0].total;
    this.checkoutForm.value.user = this.cartList[0]._id;
    this.checkoutForm.value.products = this.cartList[0].products;
    console.log(this.checkoutForm.value);
  }
}
