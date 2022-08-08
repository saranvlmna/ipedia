import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  returnUrl: string | undefined;
  signupForm = this.formBuilder.group({
    name: '',
    email: '',
    password: '',
    number: ''
  });

  constructor(private formBuilder: FormBuilder, private auth: AuthService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.auth.signup(this.signupForm.value).subscribe(data => {
      if (data) {
        this.router.navigate([this.returnUrl]);
      }
    })
  }

  googleAuth() { 
    this.auth.googleAuth().subscribe(data => {
      if (data) {
        console.log(data);
        this.router.navigate([this.returnUrl]);
      }
    })
  }

}
