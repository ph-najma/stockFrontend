import { Component, NgModule } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sign-up',
    imports: [ReactiveFormsModule, RouterModule, CommonModule],
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm: FormGroup;
  loading: boolean = false;
  error: string | null = null;
  successMessage: string | null = null;

  constructor(private apiService: ApiService, private router: Router) {
    // Initialize the form group
    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  // Submit function
  onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }

    if (
      this.signUpForm.value.password !== this.signUpForm.value.confirmPassword
    ) {
      alert('Passwords do not match');
      return;
    }

    this.error = null;
    this.successMessage = null;
    this.loading = true;

    const userData = {
      name: this.signUpForm.value.name,
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password,
    };

    this.apiService.signup(userData).subscribe(
      (response) => {
        this.loading = false;
        this.successMessage = 'Please check your email for the OTP!';
        this.signUpForm.reset();

        this.router.navigate(['/otp'], {
          queryParams: { email: this.signUpForm.value.email },
        });
      },
      (error) => {
        this.loading = false;
        this.error = 'Something went wrong. Please try again later.';
      }
    );
  }

  goToLogin() {
    this.router.navigate(['/home']);
  }

  // Convenience getter for form controls
  get f() {
    return this.signUpForm.controls;
  }
}
