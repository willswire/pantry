import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertService } from '../alert.service'

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  private subscription: Subscription;
  message: any;

  constructor(private _alertSvc: AlertService) { }

  ngOnInit() {
    this.subscription = this._alertSvc.getAlert().subscribe(
      message => {
        switch (message && message.type) {
          case 'success':
            message.cssClass = 'alert alert-success';
          break;
          case 'error':
            message.cssClass = 'alert alert-warn';
          break;
        }
        this.message = message;
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
