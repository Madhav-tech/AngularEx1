import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {Greeting} from './../greeting/greeting.component'
import {EmployeeDetail} from './../employeeDetails/employee.component'
import { EmployeeList } from 'src/employeeList/emplyeeList.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from 'src/pipe/filter.pipe';
import { LoginForm } from 'src/loginForm/loginForm.component';
import { RouterModule, Routes } from '@angular/router';
import { EditEmployee } from 'src/EditEmployeeDetails/editemployee.component';
import { RegisterUser } from 'src/registerUser/registerUser.component';
import { EmployeeGuardGuard } from './employee-guard.guard';
import { AddEmployee } from 'src/AddEmployee/addemployee.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginForm}, 
  {path:'register',component:RegisterUser},
  { path: 'employeelist', component: EmployeeList, canActivate: [EmployeeGuardGuard]}, 
  { path: 'employeedetails/:id', component: EmployeeDetail,canActivate: [EmployeeGuardGuard]},
  {path: 'editemployee/:id',component:EditEmployee,canActivate: [EmployeeGuardGuard]},
  {path:'addemployee',component:AddEmployee},
  
  {path: '**', component: LoginForm},
];

@NgModule({
  declarations: [
    AppComponent,Greeting,EmployeeDetail,EmployeeList, FilterPipe ,LoginForm,EditEmployee,RegisterUser,AddEmployee
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes),ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [EmployeeGuardGuard],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
