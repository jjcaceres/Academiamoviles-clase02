import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder,  Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
   private router: Router,
   private formBuilder: FormBuilder


  ) { this.loginForm =  this.formBuilder.group(
    {
      userEmail: ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]]
      
    }
  )
}

  ngOnInit() {
  }

  public goTo(): void {
    this.router.navigate(['/home']);
  }
  public goToRegistrar(): void {
    this.router.navigate(['/registrar']);
  }
  public onSubmit(): void {
    if (this.loginForm.valid){
      this.router.navigate(['/home']);
    }

  }

}
