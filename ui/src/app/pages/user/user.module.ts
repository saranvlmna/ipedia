import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../../layouts/header/header.component";
import { ProductsComponent } from "./products/products.component";
import { CartComponent } from "./cart/cart.component";
import { OrdersComponent } from "./orders/orders.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { pageRoutingModule } from "./user.routing";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    HeaderComponent,
    ProductsComponent,
    CartComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    pageRoutingModule,
    NgbModule
  ],
  providers: []
})
export class UserModule {}
