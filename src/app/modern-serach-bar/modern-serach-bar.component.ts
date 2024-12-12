import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Stock {
  symbol: string;
  name: string;
  price: number;
}
@Component({
    selector: 'app-modern-serach-bar',
    imports: [FormsModule, CommonModule],
    templateUrl: './modern-serach-bar.component.html',
    styleUrl: './modern-serach-bar.component.css'
})
export class ModernSerachBarComponent {
  searchTerm: string = '';
  filteredStocks: Stock[] = [];
  isFocused: boolean = false;

  mockStocks: Stock[] = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 182.45 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 126.44 },
    { symbol: 'MSFT', name: 'Microsoft Corporation', price: 345.67 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 98.76 },
    { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 456.23 },
  ];
  constructor() {}

  ngOnInit(): void {}

  onSearchChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const term = input.value;
    this.searchTerm = term;
    if (term) {
      this.filteredStocks = this.mockStocks.filter(
        (stock) =>
          stock.symbol.toLowerCase().includes(term.toLowerCase()) ||
          stock.name.toLowerCase().includes(term.toLowerCase())
      );
    } else {
      this.filteredStocks = [];
    }
  }
  clearSearch() {
    this.searchTerm = '';
    this.filteredStocks = [];
  }

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    setTimeout(() => {
      this.isFocused = false;
    }, 200);
  }
}
