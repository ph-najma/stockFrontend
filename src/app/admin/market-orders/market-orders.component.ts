import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { OrderService, IOrder } from '../../services/order.service';
@Component({
    selector: 'app-market-orders',
    imports: [HeaderComponent, RouterModule, CommonModule, CurrencyPipe],
    templateUrl: './market-orders.component.html',
    styleUrl: './market-orders.component.css'
})
export class MarketOrdersComponent implements OnInit {
  marketOrders: IOrder[] = [];
  constructor(private orderService: OrderService) {}
  ngOnInit(): void {
    this.getMarketOrders();
  }
  getMarketOrders(): void {
    this.orderService.getMarketOrders().subscribe((orders) => {
      this.marketOrders = orders;
      console.log(orders);
    });
  }
}
