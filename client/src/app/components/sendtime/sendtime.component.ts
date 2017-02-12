import {Component, OnInit} from '@angular/core';
import {SendtimeService} from '../../services/sendtime.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-sendtime',
  templateUrl: './sendtime.component.html',
  styleUrls: ['./sendtime.component.css']
})
export class SendtimeComponent implements OnInit {

  constructor(private _router: Router, private _sendtimeService: SendtimeService) {
  }

  ngOnInit() {
  }
  
  public sendtime(reciever: string, amount: string) {
    
    this._sendtimeService.sendtime(reciever, amount)
            
    console.log("sent time successfully!");
    this._router.navigate(['./things']); //todo: add success form
      
    }
}