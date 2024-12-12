import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
    selector: 'app-forgot-pass',
    imports: [FormsModule, RouterModule],
    templateUrl: './forgot-pass.component.html',
    styleUrl: './forgot-pass.component.css'
})
export class ForgotPassComponent {
  email: string = '';
  loading: boolean = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private apiservice: ApiService,
    private router: Router,
    private auth: AuthService
  ) {}

  onSubmit() {
    this.loading = true;
    this.successMessage = null;
    this.errorMessage = null;

    this.auth.setEmail(this.email);

    this.apiservice.forgotPassword({ email: this.email }).subscribe(
      (response) => {
        console.log(this.email);
        console.log(response);
        setTimeout(() => {
          this.router.navigate(['/resetPassword']);
        });
        this.successMessage = 'A OTP sent to your mail';
      },
      (error) => {
        this.errorMessage = 'Something went wrong ';
      }
    );
  }
}
