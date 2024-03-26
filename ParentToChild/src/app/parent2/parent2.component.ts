import { Component } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component {

  dataToSend: any ;

  sendData(value : any){
    console.log(value)
    this.dataToSend = value
  }
}
