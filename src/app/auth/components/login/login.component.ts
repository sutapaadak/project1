import { Component, OnInit } from '@angular/core';
//import{ User } from '../../dataModel/user';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error: {};
  loginError: string;
  constructor(private fb: FormBuilder,private authService: AuthService,private router:Router) { }
 //
  ngOnInit() {
    this.loginForm  =  this.fb.group({
      username: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    });
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    this.submitted = true;
    this.authService.login(this.username.value, this.password.value).subscribe((data) => {      
      if (this.authService.isLoggedIn()) {
        
        this.router.navigate(['/dashboard/load']);
      } else {
        this.loginError = 'Username or password is incorrect.';
      }
     },
     error => this.error = error
    );
  }


}
