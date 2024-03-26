import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { Child2Component } from './child2/child2.component';
import { Parent2Component } from './parent2/parent2.component';
import { ParentAComponent } from './parent-a/parent-a.component';
import { ChildAComponent } from './child-a/child-a.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    Child2Component,
    Parent2Component,
    ParentAComponent,
    ChildAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
