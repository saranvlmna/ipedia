import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class adminComponent implements OnInit {
  returnUrl: string | undefined;
  loginForm = this.formBuilder.group({
    email: "",
    password: ""
  });

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.auth.login(this.loginForm.value).subscribe((data) => {
      if (data) {
        this.router.navigate(["/admin"]);
      }
    });
  }
}
