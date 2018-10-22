import { Product } from "./Product";

export class Instruction {
    id:number;
    Step:number;
    Component:string;
    Action:string;
    Parameter:string;
    Product:Product;
}