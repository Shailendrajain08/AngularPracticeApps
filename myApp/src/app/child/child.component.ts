import { Component } from '@angular/core';
import { ShareService } from '../share.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  
dataFromParent : string | undefined;

private subscription : Subscription | undefined

constructor ( private shareService : ShareService ) {
  this.subscription = this.shareService.data.subscribe( data => {
    this.dataFromParent = data;
  })
}

}
