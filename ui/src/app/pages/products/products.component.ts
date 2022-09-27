import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { CartService } from "src/app/services/cart.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private authService: AuthService
  ) { }
  productsList: any[] = [];

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAll().subscribe((res: any) => {
      this.productsList = res.data;
    });
  }

  async addToCart(product: any) {
    this.authService.me().subscribe((res: any) => {
      if (res.data.passport) {
        this.cartService.add(res.data.passport.user._id, product._id).subscribe((res: any) => {
          console.log(res.data)
        });
      } else {
        this.authService.googleAuth()
      }
    })

  }

  addToWishList(product: any) {
    console.log(product);
  }
}
