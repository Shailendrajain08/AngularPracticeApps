import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chile',
  templateUrl: './chile.component.html',
  styleUrls: ['./chile.component.css']
})
export class ChileComponent {
  @Input() item = '';
}
