import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { adminComponent } from "./admin.auth/admin.component";
import { LoginComponent } from "./user.auth/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { accountRoutingModule } from "./accounts.routing";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [adminComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    accountRoutingModule,
    NgbModule
  ],
  providers: []
})
export class accountsModule {}
