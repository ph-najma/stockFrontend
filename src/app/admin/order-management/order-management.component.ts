import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-order-management',
  imports: [HeaderComponent, RouterModule, CommonModule],
  templateUrl: './order-management.component.html',
  styleUrl: './order-management.component.css',
})
export class OrderManagementComponent implements OnInit {
  orders: any[] = [];
  filteredOrders: any[] = [];
  currentFilter: string = 'PENDING';

  constructor(private orderservice: OrderService) {}
  ngOnInit(): void {
    this.fetchOrders();
  }
  fetchOrders(): void {
    this.orderservice.getOrders().subscribe(
      (data) => {
        this.orders = data;
        this.filterOrders(this.currentFilter);
        console.log(data);
      },
      (error) => {
        console.error('Error fetching orders', error);
      }
    );
  }
  filterOrders(status: string): void {
    this.currentFilter = status;
    this.filteredOrders = this.orders.filter(
      (order) => order.status === status
    );
  }
}
