import { Product } from "./Product";

export class Order {
    id:number;
    quantity:number;
    finishTime:Date;
    orderTime:Date;
    orderName:string;
    finished:boolean;
    product:Product;
}