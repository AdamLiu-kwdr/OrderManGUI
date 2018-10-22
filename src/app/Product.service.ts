import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { environment } from "../environments/environment";
import { Product } from "./Model/Product";
import { Console } from '@angular/core/src/console';

const httpOptions ={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

@Injectable({
    providedIn:'root'
})

export class ProductService {
    constructor(
        private http:HttpClient
    ){}

    private APIRoute:string=environment.OrderManApiURL; //URL to Products, in enviorment file.

    //Return All Products
    getProducts(): Observable<Product[]>{
        var Products = this.http.get<Product[]>(this.APIRoute+`/Product`);
        return Products;
    }

    //Return single Product from id
    getProduct(id: number): Observable<Product>{
        return this.http.get<Product>(this.APIRoute+`/Product/${id}`);
    }

    //Create a new Product
    createProduct(Product:Product): Observable<Product>{
        return this.http.post<Product>(this.APIRoute+`/Product`,Product,httpOptions);
    }

    //Delete single Product from id
    deleteProduct(Product:Product|number): Observable<Product>{
        const id = typeof Product === 'number' ? Product: Product.id;
        return this.http.delete<Product>(this.APIRoute+`/Product/${id}`,httpOptions);
    }
}