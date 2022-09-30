import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductsComponent } from "./products/products.component";
import { CartComponent } from "./cart/cart.component";
import { OrdersComponent } from "./orders/orders.component";

const routes: Routes = [
    { path: "", component: ProductsComponent },
    { path: "cart", component: CartComponent },
    { path: "orders", component: OrdersComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class pageRoutingModule { }
