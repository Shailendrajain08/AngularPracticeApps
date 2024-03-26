import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Output() newItemEvent = new EventEmitter();

sendData(value : any){
  console.log(value)
  this.newItemEvent.emit(value);
}
}
