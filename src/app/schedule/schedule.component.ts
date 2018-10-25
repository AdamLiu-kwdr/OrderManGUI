import { Component, OnInit, Input } from '@angular/core';

import { Schedule } from "../Model/Schedule";
import { scheduleService } from "../Schedule.service";

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
    this.getSchedules();
  }

  //Get all Schedules method
  getSchedules(): void{
      //Only show working schedule if working filter is true
      if (this.Working) {
        this.scheduleService.getSchedules()
      .subscribe(_Schedules => this.Schedules = _Schedules.filter(_schedule => _schedule.working == true)); //always use DIFFERENT names!
      }
      else
      {
        this.scheduleService.getSchedules()
        .subscribe(_Schedules => this.Schedules = _Schedules); //always use DIFFERENT names!
      }
  }
}