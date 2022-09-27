import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}
  productsList: any[] = [];

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAll().subscribe((res: any) => {
      this.productsList = res.data;
    });
  }

  addToCart(product: any) {
    product._id;
    this.cartService.add(product._id, product._id).subscribe((res: any) => {});
  }

  addToWishList(product: any) {
    console.log(product);
  }
}
