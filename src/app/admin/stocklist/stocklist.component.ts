import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StockService, Stock } from '../../services/stock.service';
import { HeaderComponent } from '../header/header.component';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-stocklist',
  imports: [CommonModule, HeaderComponent, RouterModule],
  templateUrl: './stocklist.component.html',
  styleUrl: './stocklist.component.css',
})
export class StocklistComponent implements OnInit {
  stocks: Stock[] = [];

  constructor(private stockService: StockService) {}

  dropdownOpen: string | null = null;

  getStatusClass(status: string): string {
    return status === 'active'
      ? 'bg-green-50 text-green-700 border border-green-200'
      : 'bg-gray-50 text-gray-600 border border-gray-200';
  }

  toggleDropdown(stockId: string): void {
    this.dropdownOpen = this.dropdownOpen === stockId ? null : stockId;
  }

  editStock(symbol: string): void {
    console.log(`Edit ${symbol}`);
  }

  deleteStock(symbol: string): void {
    console.log(`Delete ${symbol}`);
  }
  ngOnInit(): void {
    this.fetchStocks();
  }
  fetchStocks(): void {
    this.stockService.getStocks().subscribe({
      next: (data) => {
        this.stocks = data;
      },
      error: (err) => {
        console.error('Error fetching stocks:', err);
      },
    });
  }
}
