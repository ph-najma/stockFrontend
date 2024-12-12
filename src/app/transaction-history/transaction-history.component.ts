import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction-history',
  imports: [CommonModule],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.css',
})
export class TransactionHistoryComponent {
  columnVisibility: Record<
    'id' | 'companyName' | 'shares' | 'total' | 'status',
    boolean
  > = {
    id: false,
    companyName: true,
    shares: true,
    total: true,
    status: true,
  };

  isColumnDropdownOpen = false;

  // Sample transaction data
  transactionData = [
    {
      id: 'TX001',
      date: '2024-12-07',
      type: 'Buy',
      symbol: 'AAPL',
      companyName: 'Apple Inc.',
      shares: 50,
      price: 150,
      total: 7500,
      status: 'Completed',
    },
    {
      id: 'TX002',
      date: '2024-12-06',
      type: 'Sell',
      symbol: 'GOOGL',
      companyName: 'Google LLC',
      shares: 30,
      price: 1200,
      total: 36000,
      status: 'Completed',
    },
  ];

  toggleColumnDropdown(): void {
    this.isColumnDropdownOpen = !this.isColumnDropdownOpen;
  }

  getColumnKeys(): Array<keyof typeof this.columnVisibility> {
    return Object.keys(this.columnVisibility) as Array<
      keyof typeof this.columnVisibility
    >;
  }

  toggleColumnVisibility(column: keyof typeof this.columnVisibility): void {
    this.columnVisibility[column] = !this.columnVisibility[column];
  }
}
