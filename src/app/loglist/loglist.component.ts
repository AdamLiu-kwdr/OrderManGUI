import { Component, OnInit } from '@angular/core';

import { Log } from "../Model/Log";
import { CommunicateService } from "../Communicate.service";

@Component({
  selector: 'app-loglist',
  templateUrl: './loglist.component.html',
  styleUrls: ['./loglist.component.css']
})
export class LoglistComponent implements OnInit {

  logs: Log[];

  constructor(private communicationService:CommunicateService) { }

  ngOnInit() {
    this.getLog();
  }

  getLog(): void {
    this.communicationService.getLogs(10)
      .subscribe(_Logs => this.logs = _Logs.slice(0,5));
  }

}
