import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { adminComponent } from "./admin.auth/admin.component";
import { LoginComponent } from "./user.auth/login.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "admin", component: adminComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class accountRoutingModule {}
