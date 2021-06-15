import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {Greeting} from './../greeting/greeting.component'
import {EmployeeDetail} from './../employeeDetails/employee.component'
import { EmployeeList } from 'src/employeeList/emplyeeList.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/pipe/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,Greeting,EmployeeDetail,EmployeeList, FilterPipe 
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
