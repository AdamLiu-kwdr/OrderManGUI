import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Schedule } from "../Model/Schedule";
import { scheduleService } from "../schedule.service";
import { CommunicateService } from "../Communicate.service";

@Component({
  selector: 'app-ui-functions',
  templateUrl: './ui-functions.component.html',
  styleUrls: ['./ui-functions.component.css']
})
export class UiFunctionsComponent implements OnInit {

  constructor(
    private scheduleService:scheduleService,
    private communicationService:CommunicateService,
    private router:Router,
  ) { }  

  CheckResponse:string;

  ngOnInit() {
  }

  generateNewSchedule():void {
    var schedules = this.scheduleService.generateSchedule().subscribe();
    this.router.navigate(["schedule"]);
  }

  initProductionLine():void{
    this.CheckResponse = "Sending Init signal.";
    this.communicationService.checkService().subscribe(resp =>{
      this.CheckResponse = `Responce:`+resp.status.toString();
    });
  }

  ActivateProductionLine():void{
    this.CheckResponse = "Sending Run signal.";
    this.communicationService.sendRun().subscribe(resp=>{
      this.CheckResponse= `Responce:`+resp.status.toString()
    })
  }
}
