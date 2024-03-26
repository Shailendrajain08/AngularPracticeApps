import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.css']
})
export class OuterComponent {


  constructor(private sharedSer : SharedService){

  }

  sendDataToChild(data: any){
    this.sharedSer.sendData(data.form.value.fullName)
  }
}
