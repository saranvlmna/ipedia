import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl: string | undefined;
  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });


  constructor(private formBuilder: FormBuilder, private auth: AuthService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value).subscribe(data => {
      if (data) {
        this.router.navigate([this.returnUrl]);
      }
    })
  }

  googleAuth() {
    this.auth.googleAuth()
  }

}
