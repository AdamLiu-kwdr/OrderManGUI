import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../environments/environment";
import { Schedule } from "./Model/Schedule";

@Injectable({
    providedIn:'root'
})

export class scheduleService {
    constructor(
        private http:HttpClient
    ){}

    private APIRoute:string=environment.OrderManApiURL; //URL to Schedules, in enviorment file.

    //Return All Schedules
    getSchedules(): Observable<Schedule[]>{
        var Schedules = this.http.get<Schedule[]>(this.APIRoute+`/Schedule`);
        return Schedules;
    }
}