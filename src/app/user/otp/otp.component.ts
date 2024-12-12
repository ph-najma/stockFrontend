import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-otp',
    imports: [FormsModule, CommonModule],
    templateUrl: './otp.component.html',
    styleUrl: './otp.component.css'
})
export class OtpComponent implements OnInit, OnDestroy {
  otp: string = '';
  loading: boolean = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;
  email: string = '';
  remainingTime: number = 300; // Set the OTP expiration time in seconds (5 minutes)
  timer: any; // To hold the setInterval reference

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'];
    });

    // Start the timer
    this.startTimer();
  }

  ngOnDestroy(): void {
    // Cleanup the timer when the component is destroyed
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
      } else {
        clearInterval(this.timer);
      }
    }, 1000); // Update every second
  }

  onSubmit() {
    this.loading = true;
    this.apiService.verifyOtp({ otp: this.otp }).subscribe(
      (response) => {
        this.loading = false;
        this.successMessage = 'OTP verified! You are successfully signed up.';
        this.router.navigate(['/home']);
      },
      (error) => {
        this.loading = false;
        this.errorMessage = 'Invalid OTP. Please try again.';
      }
    );
  }

  resendOtp() {
    this.loading = true;
    this.apiService.resendOtp({ email: this.email }).subscribe(
      (response) => {
        this.loading = false;
        this.successMessage = 'New OTP sent to your email!';
        this.remainingTime = 300; // Reset timer when OTP is resent
        this.startTimer(); // Restart the timer
      },
      (error) => {
        this.loading = false;
        this.errorMessage = 'Failed to resend OTP. Please try again.';
      }
    );
  }
}
