import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { SearchComponent } from '../search/search.component';

@Component({
    selector: 'app-home',
    imports: [RouterModule, UserHeaderComponent, SearchComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private apiService: ApiService, private router: Router) {}
  logout() {
    this.apiService.logout(); // Call the logout method from ApiService
    this.router.navigate(['/login']); // Redirect to the login page after logout
  }
  profile() {
    this.router.navigate(['/userProfile']);
  }
}
