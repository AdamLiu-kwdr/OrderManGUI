import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { environment } from "../environments/environment";
import { Order } from "./Model/Order";
import { Console } from '@angular/core/src/console';

const httpOptions ={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

@Injectable({
    providedIn:'root'
})

export class OrderService {
    constructor(
        private http:HttpClient
    ){}

    private APIRoute:string=environment.OrderManApiURL; //URL to orders, in enviorment file.

    //Return All Orders
    getOrders(): Observable<Order[]>{
        var Orders = this.http.get<Order[]>(this.APIRoute+`/Order`);
        return Orders;
    }

    //Return single Order from id
    getOrder(id: number): Observable<Order>{
        return this.http.get<Order>(this.APIRoute+`/Order/${id}`);
    }

    //Create a new order
    createOrder(order:Order): Observable<Order>{
        return this.http.post<Order>(this.APIRoute+`/Order`,order,httpOptions);
    }

    //Delete single Order from id
    deleteOrder(order:Order|number): Observable<Order>{
        const id = typeof order === 'number' ? order: order.id;
        return this.http.delete<Order>(this.APIRoute+`/Order/${id}`,httpOptions);
    }
}