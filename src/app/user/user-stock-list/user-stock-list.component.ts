import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { CommonModule } from '@angular/common';
import { Order } from '../../services/stock.service';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-user-stock-list',
  imports: [CommonModule, UserHeaderComponent, FormsModule, SearchComponent],
  templateUrl: './user-stock-list.component.html',
  styleUrl: './user-stock-list.component.css',
})
export class UserStockListComponent implements OnInit {
  stocks: any[] = [];
  isSellModalOpen = false;
  isBuyModalOpen = false;
  selectedStock: any;
  quantityToSell: number = 1;
  quantityToBuy: number = 1;
  buyPrice: number = 0;
  sellPrice: number = 0;
  orderType: 'MARKET' | 'LIMIT' | 'STOP' = 'MARKET';

  constructor(private stockService: StockService) {}

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

  openSellModal(stock: any): void {
    this.selectedStock = stock;
    this.isSellModalOpen = true;
    this.sellPrice = stock.price;
    this.quantityToSell = 1;
  }

  closeSellModal(): void {
    this.isSellModalOpen = false;
    this.selectedStock = null;
  }
  sellStock(): void {
    if (this.quantityToSell > 0 && this.selectedStock) {
      // Prepare the order object
      console.log(this.quantityToSell);
      const orderData: Order = {
        user: '674d71c41caf577c72bbac75', // Get the logged-in user's ID
        stock: this.selectedStock._id,
        type: 'SELL',
        orderType: this.orderType, // Can change depending on your order type options
        quantity: this.quantityToSell,
        price: this.sellPrice, // Current price of the stock
        status: 'PENDING',
      };

      this.stockService.placeOrder(orderData).subscribe({
        next: (data) => {
          console.log('Order created successfully:', data);
          this.closeSellModal(); // Close the modal after success
          this.fetchStocks(); // Refresh the stock list after sale
        },
        error: (err) => {
          console.error('Error selling stock:', err);
        },
      });
    }
  }
  openBuyModal(stock: any): void {
    console.log('heloo');
    this.selectedStock = stock;
    this.isBuyModalOpen = true;
    this.buyPrice = stock.price;
    console.log(this.isBuyModalOpen); // Set default buy price to current stock price
  }

  closeBuyModal(): void {
    this.isBuyModalOpen = false;
    this.selectedStock = null;
    this.quantityToBuy = 1;
    this.buyPrice = 0;
  }
  buyStock(): void {
    if (this.quantityToBuy > 0 && this.selectedStock) {
      const orderData: Order = {
        user: '67445524aaf3d4f24742e562', // Get the logged-in user's ID
        stock: this.selectedStock._id,
        type: 'BUY',
        orderType: this.orderType, // Or 'LIMIT' based on your selection
        quantity: this.quantityToBuy,
        price: this.buyPrice,
        status: 'PENDING',
      };

      this.stockService.placeOrder(orderData).subscribe({
        next: (data) => {
          console.log('Buy order created successfully:', data);
          this.closeBuyModal(); // Close the modal after success
          this.fetchStocks(); // Refresh the stock list after the purchase
        },
        error: (err) => {
          console.error('Error buying stock:', err);
        },
      });
    }
  }
}
