import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { environment } from "../environments/environment";
import { Log } from "./Model/Log";
import { Console } from '@angular/core/src/console';
import { CodegenComponentFactoryResolver } from '@angular/core/src/linker/component_factory_resolver';

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

    code:Number = 0;

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
    checkService(): Observable<HttpResponse<string>>{
        return this.http.get(`${this.APIRoute}/CheckService`, {observe: 'response',responseType: 'text'});
    }

    sendRun():Observable<HttpResponse<null>>{
        return this.http.get<null>(`${this.APIRoute}/Run`, {observe: 'response'});
    }
}