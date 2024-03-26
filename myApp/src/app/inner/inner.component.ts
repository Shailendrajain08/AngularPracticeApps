import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent {

  gotDataFromParent : string | undefined;

  private subscription : Subscription | undefined;

  constructor(private sharedService : SharedService){
    this.subscription = this.sharedService.shareData.subscribe(data => {
      this.gotDataFromParent = data
    })
  }

}
