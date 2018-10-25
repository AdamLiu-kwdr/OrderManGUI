import { Order } from "./Order";

//Use this as standart
export class Schedule {
    id:number;
    working?:boolean;
    producedCount:number;
    orders:Order;
}