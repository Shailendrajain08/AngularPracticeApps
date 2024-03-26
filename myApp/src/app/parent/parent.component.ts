import { Component } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  constructor(private shareService : ShareService){

  }

  sendDataToChild(){
    this.shareService.sendData("My name is Shailendra Jain");
  }
}
