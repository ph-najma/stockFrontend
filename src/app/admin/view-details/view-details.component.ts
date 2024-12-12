import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {
  OrderService,
  IOrder,
  ITransaction,
} from '../../services/order.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-view-details',
    imports: [HeaderComponent, CommonModule],
    templateUrl: './view-details.component.html',
    styleUrl: './view-details.component.css'
})
export class ViewDetailsComponent implements OnInit {
  orderDetails: IOrder | null = null;
  transactions: ITransaction[] = [];
  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}
  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id');
    if (orderId) {
      this.getOrderDetails(orderId);
    }
  }
  getOrderDetails(orderId: string): void {
    this.orderService.getOrderById(orderId).subscribe((res) => {
      if (res.order) {
        this.orderDetails = res.order;
      }
      console.log(this.orderDetails);
      this.transactions = res.transactions;
    });
  }
}
