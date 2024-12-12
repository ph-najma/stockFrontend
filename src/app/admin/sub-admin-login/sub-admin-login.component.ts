import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MainLoginComponent } from '../../main-login/main-login.component';
import { AdminLoginData, LoginResponse } from '../../interfaces/userInterface';

@Component({
    selector: 'app-sub-admin-login',
    imports: [ReactiveFormsModule, MainLoginComponent, MainLoginComponent],
    templateUrl: './sub-admin-login.component.html',
    styleUrl: './sub-admin-login.component.css'
})
export class SubAdminLoginComponent {
  loading: boolean = false;
  error: string | null = null;
  successMessage: string | null = null;

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit(adminData: AdminLoginData) {
    this.error = null;
    this.successMessage = null;
    this.loading = true;

    this.apiService.loginAdmin(adminData).subscribe(
      (response: LoginResponse) => {
        sessionStorage.setItem('token', response.token);
        this.loading = false;
        this.successMessage = 'Successfully logged in';
        this.router.navigate(['/adminHome']);
      },
      (error) => {
        this.loading = false;
        this.error = 'Something went wrong. Please try again later.';
      }
    );
  }
}
