import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MainLoginComponent } from '../../main-login/main-login.component';

import { CommonModule } from '@angular/common';
import { LoginFormData, LoginResponse } from '../../interfaces/userInterface';

@Component({
  selector: 'app-sub-login',
  imports: [
    ReactiveFormsModule,
    MainLoginComponent,
    MainLoginComponent,

    CommonModule,
  ],
  templateUrl: './sub-login.component.html',
  styleUrl: './sub-login.component.css',
})
export class SubLoginComponent {
  loading: boolean = false;
  error: string | null = null;
  successMessage: string | null = null;
  isUserLogin: boolean = true;

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit(userData: LoginFormData) {
    this.error = null;
    this.successMessage = null;
    this.loading = true;

    this.apiService.login(userData).subscribe(
      (response: LoginResponse) => {
        if (response.token) {
          sessionStorage.setItem('token', response.token);
          this.loading = false;
          this.successMessage = 'Successfully logged in';
          this.router.navigate(['/home']);
        }
      },
      (error) => {
        this.loading = false;
        this.error = 'Something went wrong. Please try again later.';
      }
    );
  }
}
