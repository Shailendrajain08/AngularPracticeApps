import { Injectable } from '@angular/core';
import { UserType } from './user-type';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userDetails: any[] = [];
  constructor() { }

  public getUser() {
    return this.userDetails;
  }

  public addUser(data: UserType) {
    this.userDetails.push(data);
  }

  public editUser(index: number, data: UserType) {
    this.userDetails[index] = data;
  }

  public deleteUser(index: number) {
    this.userDetails.splice(index, 1)
  }
}
