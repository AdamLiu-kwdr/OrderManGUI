import { Component, OnInit } from '@angular/core';

import { Order } from "../Model/Order";
import { OrderService } from "../Order.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[];

  constructor(private orderService: OrderService){ }

  ngOnInit() {
    //Make Orders available in this component
    this.getOrders();
  }

  //Get all orders method
  getOrders(): void{
    this.orderService.getOrders()
      .subscribe(_orders => this.orders = _orders); //always use DIFFERENT names!
  }

}