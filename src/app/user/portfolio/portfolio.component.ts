import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, UserHeaderComponent, SearchComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {
  portfolioData: any = { totalValue: 0, portfolio: [] };
  selectedStock: any = null;
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.fetchPortfolio();
  }

  fetchPortfolio(): void {
    this.apiService.getPortfolio().subscribe(
      (data) => {
        this.portfolioData = data;
        console.log(this.portfolioData.portfolio);
        console.log(this.portfolioData.portfolio[0].symbol);
        console.log(data);
      },
      (error) => {
        console.error('Error fetching portfolio data:', error);
      }
    );
  }

  selectStock(stock: any): void {
    this.selectedStock = stock;
  }

  closeStockDetails(): void {
    this.selectedStock = null;
  }
}
