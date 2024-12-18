import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Stock {
  _id: string;
  symbol: string;
  timestamp: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  price: number;
  change: number;
  changePercent: string;
  latestTradingDay: string;
}
export interface Order {
  user: string; // Assuming you have the user's ID available
  stock: string;
  type: 'BUY' | 'SELL';
  orderType: 'MARKET' | 'LIMIT' | 'STOP';
  quantity: number;
  price: number; // This is the price for Limit orders
  stopPrice?: number;
  status: 'PENDING' | 'COMPLETED' | 'FAILED'; // Only for STOP orders
}

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private apiUrl = 'http://localhost:5000';
  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = sessionStorage.getItem('token');
    console.log(token);
    return new HttpHeaders({
      Authorization: `Bearer ${token}`, // Set the token in the Authorization header
    });
  }
  getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${this.apiUrl}/stocklist`);
  }
  updateStock(id: string, stock: Stock): Observable<Stock> {
    console.log(id, stock, 'from service');
    return this.http.put<Stock>(`${this.apiUrl}/editStock/${id}`, stock);
  }

  deleteStock(id: string | undefined): Observable<Stock> {
    return this.http.put<Stock>(`${this.apiUrl}/softDeleteStock/${id}`, {});
  }
  displayStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${this.apiUrl}/dispalyStocks`);
  }
  placeOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiUrl}/orders`, order);
  }
  placeBuyOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiUrl}/orders`, order);
  }
  checkPortfolio(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiUrl}/checkPortfolio`, order);
  }
}
