import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./account/guards/auth.guard";
import { HeaderComponent } from "./layouts/header/header.component";

const routes: Routes = [
  {
    path: "",
    component: HeaderComponent,
    loadChildren: () =>
      import("./pages/user/user.module").then((m) => m.UserModule),
    canActivate: [AuthGuard]
  },
  {
    path: "account",
    loadChildren: () =>
      import("./account/account.module").then((m) => m.accountsModule)
  },
  {
    path: "admin",
    component: HeaderComponent,
    loadChildren: () =>
      import("./pages/admin/admin.module").then((m) => m.AdminModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
