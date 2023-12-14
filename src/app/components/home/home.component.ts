import { Component, OnInit } from '@angular/core';
import { MessagePosition, MessageType } from 'src/app/enums/alertify';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private alertifyService: AlertifyService) { }

  ngOnInit(): void {
    this.alertifyService.message(
      "Alertify Message",
      {
        messageType: MessageType.Success,
        messagePosition: MessagePosition.TopCenter,
        delay: 1
      }

    )
  }
}
