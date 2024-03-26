import { Component } from '@angular/core';
import { ShareService } from '../share.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  private subscription : Subscription | undefined;

  recievedData : string | undefined;

  constructor(private shareService : ShareService){
    this.subscription = this.shareService.data.subscribe(data => {
      this.recievedData = data
    })
  }

}
