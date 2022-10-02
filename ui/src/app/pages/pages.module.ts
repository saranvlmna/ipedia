import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProductsComponent } from "./products/products.component";
import { CartComponent } from "./cart/cart.component";
import { OrdersComponent } from "./orders/orders.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { pageRoutingModule } from "./page.routing";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    DashboardComponent,
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
export class PagesModule {}
