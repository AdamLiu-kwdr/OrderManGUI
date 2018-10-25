import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { environment } from "../environments/environment";
import { Log } from "./Model/Log";
import { Console } from '@angular/core/src/console';

const httpOptions ={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

@Injectable({
    providedIn:'root'
})

export class CommunicateService {
    constructor(
        private http:HttpClient
    ){}

    private APIRoute:string=environment.OrderManApiURL; //URL to orders, in enviorment file.

    //Return Logs
    getLogs(recordCount:number): Observable<Log[]>{
        return this.http.get<Log[]>(`${this.APIRoute}/Log`);
    }

    //Call CheckConnection and read HTTP respond code (Under construction.)
    checkConnection(): void{
        this.http.get<void>(`${this.APIRoute}/CheckConnection`);
    }

    //Call CheckService and read HTTP respond code (Under construction.)
    checkService(): void{
        this.http.get<void>(`${this.APIRoute}/CheckService`);
    }
}