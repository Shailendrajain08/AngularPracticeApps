import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-a',
  templateUrl: './parent-a.component.html',
  styleUrls: ['./parent-a.component.css']
})
export class ParentAComponent {

  sendDatatoChild = "";

  sendData(value:any){
    console.log(value)
    this.sendDatatoChild = value
  }

}
