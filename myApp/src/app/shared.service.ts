import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private dataSubject = new Subject<string> ();

  shareData = this.dataSubject.asObservable();

  sendData(shareData : string) {
    this.dataSubject.next(shareData);
  }
}
