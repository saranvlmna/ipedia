import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignupComponent } from "../account/signup/signup.component";
import { LoginComponent } from "../account/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { accountRoutingModule } from "./accounts.routing";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [SignupComponent, LoginComponent],
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
