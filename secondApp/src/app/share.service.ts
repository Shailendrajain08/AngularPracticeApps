import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }

private shareSubjet = new Subject<string> ();

data = this.shareSubjet.asObservable();

sendData (data : string){
  this.shareSubjet.next(data);
}

}
