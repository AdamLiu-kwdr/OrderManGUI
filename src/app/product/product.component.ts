import { Component, OnInit } from '@angular/core';

import { Product } from "../Model/Product";
import { ProductService } from "../Product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[]

  constructor(private productService:ProductService) { }

  ngOnInit() {
    //Make Productss available in this component
    this.getProducts();
  }

  getProducts(): void{
    this.productService.getProducts()
      .subscribe(_products => this.products = _products); //always use DIFFERENT names!
  }

}
