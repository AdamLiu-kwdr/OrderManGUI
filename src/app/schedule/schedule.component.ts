import { Component, OnInit, Input } from '@angular/core';

import { Schedule } from "../Model/Schedule";
import { scheduleService } from "../schedule.service";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  Schedules: Schedule[];

  //Schedule table filter
  @Input() Working:boolean = false;

  constructor(private scheduleService: scheduleService){ }

  ngOnInit() {
    //Make Schedules available in this component
    this.getAllSchedules();
  }

  //Get all Schedules method
  getAllSchedules(): void{
      //Only show working schedule if working filter is true
      if (this.Working) {
        this.scheduleService.getSchedules()
      .subscribe(_Schedules => this.Schedules = _Schedules.filter(_schedule => _schedule.working == true)); //always use DIFFERENT names!
      }
      else
      {
        //Sort the Schedule by schedule.isworking 
        this.scheduleService.getSchedules()
        .subscribe(_Schedules => this.Schedules = _Schedules.sort(function(x,y){return +y.working -+x.working})); //always use DIFFERENT names!
      }
  }
}