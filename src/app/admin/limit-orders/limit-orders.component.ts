import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { OrderService, IOrder } from '../../services/order.service';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-limit-orders',
    imports: [HeaderComponent, RouterModule, CurrencyPipe, CommonModule],
    templateUrl: './limit-orders.component.html',
    styleUrl: './limit-orders.component.css'
})
export class LimitOrdersComponent implements OnInit {
  orders: IOrder[] = [];
  filters = {
    status: 'all',
    user: '',
    dateRange: '',
  };
  ngOnInit(): void {
    this.fetchOrders();
  }

  constructor(private orderService: OrderService) {}
  fetchOrders(): void {
    this.orderService.getLimitOrders(this.filters).subscribe(
      (data: IOrder[]) => {
        // Specify the response type as IOrder[]
        this.orders = data;
      },
      (error) => {
        console.error('Error fetching orders', error);
      }
    );
  }
  applyFilters(): void {
    this.fetchOrders();
  }
}
