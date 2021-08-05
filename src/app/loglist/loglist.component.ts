import { Component, OnInit, Input } from '@angular/core';

import { Log } from "../Model/Log";
import { CommunicateService } from "../Communicate.service";

@Component({
  selector: 'app-loglist',
  templateUrl: './loglist.component.html',
  styleUrls: ['./loglist.component.css']
})
export class LoglistComponent implements OnInit {

  logs: Log[];

  @Input() Count:number = 10;

  constructor(private communicationService:CommunicateService) { }

  ngOnInit() {
    this.getLog();
  }

  getLog(): void {
    this.communicationService.getLogs(this.Count)
      .subscribe(_Logs => this.logs = _Logs.slice(0,this.Count));
  }

}
