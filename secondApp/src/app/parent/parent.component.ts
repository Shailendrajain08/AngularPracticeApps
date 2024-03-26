import { Component } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

constructor(private shareSer : ShareService){

}
  sendData(data : any){

      this.shareSer.sendData(data.form.value.myname)
    }
}
