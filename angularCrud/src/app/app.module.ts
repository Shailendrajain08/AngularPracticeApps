import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddEditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: []
       }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
