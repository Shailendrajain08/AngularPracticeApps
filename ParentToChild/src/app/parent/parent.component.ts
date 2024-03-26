import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  items:any = [];

  addItem(newItem: any) {
    this.items.push(newItem);
  }

}
