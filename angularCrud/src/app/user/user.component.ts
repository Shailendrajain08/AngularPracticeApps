import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditUserComponent } from '../add-edit-user/add-edit-user.component';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  displayedColumns: string[] = ['Id','First Name', 'Last Name', 'Email', 'Contact', 'Action'];
  userDetails: MatTableDataSource<Element> | undefined

  constructor(
    public dialog: MatDialog,
    public userService: UserServiceService,
  ) { }

  private getUsers() {
    this.userDetails = new MatTableDataSource<Element>(this.userService.getUser());
  }

  public openPopup() {
    const dialogRef = this.dialog.open(AddEditUserComponent, {
      width: '350px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getUsers();
    });
  }

  public editUser(index : any, data: any) {
    data.id = index;
    data.action = 'edit';
    const dialogRef = this.dialog.open(AddEditUserComponent, {
      width: '350px',
      data: data
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getUsers();
    });
  }

  public deleteUser(index : any) {
    const data = {
      action: 'delete'
    }
    const dialogRef = this.dialog.open(AddEditUserComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.deleteUser(index);
        this.getUsers();
      }
    });
  }
}
