import { Component, OnInit} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { UiOrderDeleteComponent } from "../ui-order-delete/ui-order-delete.component";
import { Order } from "../Model/Order";
import { OrderService } from "../Order.service";
import { Location } from "@angular/common";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[];
  bsModalRef: BsModalRef;

  constructor(
    private orderService: OrderService,
    private location: Location,
    private modalService: BsModalService
    ){ }
  
  ngOnInit() {
    //Make Orders available in this component
    this.getOrders();
  }

  //Get all orders method
  getOrders(): void{
    this.orderService.getOrders()
    //Add + operator before boolean to covert it to int
      .subscribe(_orders => this.orders = _orders.sort(function(x,y){return +y.finished -+x.finished})); //return 1 if two bolleans are different, 0 if same.
  }

  //Show confimation for delete.
  confirmDelete(_order:Order): void{
    //Create an object for the delete component
    const initialState = {
      order: _order
    };
    this.bsModalRef = this.modalService.show(UiOrderDeleteComponent,{initialState});
  }

  goBack(): void{
    this.location.back();
  }
}