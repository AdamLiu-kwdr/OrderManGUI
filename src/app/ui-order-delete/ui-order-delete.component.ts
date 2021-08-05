import { Component, OnInit} from '@angular/core';
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { OrderService } from "../Order.service";
import { Order } from "../Model/Order";

@Component({
  selector: 'app-ui-order-delete',
  templateUrl: './ui-order-delete.component.html',
  styleUrls: ['./ui-order-delete.component.css']
})
export class UiOrderDeleteComponent implements OnInit {

  constructor(
    public bsModalRef: BsModalRef,
    private location: Location,
    private router: Router,
    private orderService: OrderService
    ){}

  order:Order;

  ngOnInit() {
  }

  deleteOrders(order:Order): void{
    this.orderService.deleteOrder(order.id).subscribe(() => window.location.reload());
  }
}
