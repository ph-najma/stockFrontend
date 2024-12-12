import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { OrderService, IOrder } from '../../services/order.service';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-matched-orders',
    imports: [HeaderComponent, RouterModule, CommonModule, CurrencyPipe],
    templateUrl: './matched-orders.component.html',
    styleUrl: './matched-orders.component.css'
})
export class MatchedOrdersComponent {
  orders: IOrder[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders() {
    this.orderService.getMatchedOrders().subscribe(
      (data) => {
        this.orders = data;
      },
      (error) => {
        console.error('Error fetching matched orders:', error);
      }
    );
  }
}
