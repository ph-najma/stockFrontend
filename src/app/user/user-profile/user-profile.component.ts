import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { ApiService } from '../../services/api.service';
@Component({
    selector: 'app-user-profile',
    imports: [FormsModule, UserHeaderComponent],
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  user = {
    name: 'NIZAM',
    fullName: 'NIZAM P H',
    profilePhoto: 'assets/profile.jpg', // Replace with your profile image path
  };

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.fetchUserDetails();
  }
  fetchUserDetails(): void {
    this.apiService.getUserProfile().subscribe({
      next: (data) => {
        this.user.name = data.name;
        this.user.fullName = data.fullName || 'unknown user';
        this.user.profilePhoto =
          data.profilePhoto || 'assets/default-profile.png';
      },
      error: (err) => console.error('Failed to fetch user details:', err),
    });
  }
  onPhotoUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.user.profilePhoto = reader.result as string;
        // Optionally, send the updated photo to the backend here
      };
      reader.readAsDataURL(file);
    }
  }
  resetPhoto(): void {
    this.user.profilePhoto = 'assets/default-profile.png'; // Reset to default image
  }
}
