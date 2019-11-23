import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { this.loginForm =  this.formBuilder.group(
    {
      userEmail: ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]],
    }
  )


  }

  ngOnInit() {
  }

  public onSubmit(): void {
    if (this.loginForm.valid){
      this.router.navigate(['/login']);
    }

  }

}
