import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsComponent } from "./products/products.component";
import { OrdersComponent } from "./orders/orders.component";
import { UsersComponent } from "./users/users.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { adminRoutingModule } from "./admin.routing";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  declarations: [
    ProductsComponent,
    OrdersComponent,
    UsersComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    adminRoutingModule,
    NgbModule
  ],
  providers: []
})
export class AdminModule {}
