import { OnInit } from '@angular/core';
import { Component, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  @HostBinding('class') class = 'd-flex flex-column flex-md-row h-100vh w-100';
  formAuth!: FormGroup

  ngOnInit() {
    this.verifyAuth();
    this.loadForm();
  }

  verifyAuth() {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/']);
    }
  }

  loadForm() {
    this.formAuth = this.formBuilder.group({
      email: ['exemplo@routagarage.com.br', Validators.required],
      password: ['123456', Validators.required]
    });
  }

  submitLogin() {
    localStorage.setItem('token', '1234567890');
    this.router.navigate(['/']);
  }
}
