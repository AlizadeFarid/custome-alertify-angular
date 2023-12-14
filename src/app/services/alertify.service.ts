import { Injectable } from '@angular/core';
import { AlertifyOptions, MessagePosition, MessageType } from '../enums/alertify';
declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  message(message: string, alertifyOptions: Partial<AlertifyOptions>) {
    alertify.set("notifier", "position", alertifyOptions.messagePosition)
    alertify.set("notifier", "delay", alertifyOptions.delay)
    alertify[alertifyOptions.messageType](message);
  }
}
