import { Component } from "@angular/core";
import {EmployeeDetail} from './../employeeDetails/employee.component'

@Component({
    selector:'employee-list',
    templateUrl:"employeeList.component.html"
})
export class EmployeeList{
    employees:any = [{
            id:1,
            email:"george.bluth@reqres.in",
            first_name:"George",
            last_name:"Bluth",
            avatar:"https://reqres.in/img/faces/1-image.jpg"
        },
        {
            id:2,
            email:"janet.weaver@reqres.in",
            first_name:"Janet",
            last_name:"Weaver",
            avatar:"https://reqres.in/img/faces/2-image.jpg"
        },
        {
            id:3,
            email:"emma.wong@reqres.in",
            first_name:"Emma",
            last_name:"Wong",
            avatar:"https://reqres.in/img/faces/3-image.jpg"
        },
        {
            id:4,
            email:"eve.holt@reqres.in",
            first_name:"Eve",
            last_name:"Holt",
            avatar:"https://reqres.in/img/faces/4-image.jpg"
        },
        {
            id:5,
            email:"charles.morris@reqres.in",
            first_name:"Charles",
            last_name:"Morris",
            avatar:"https://reqres.in/img/faces/5-image.jpg"
        },
        {
            id:6,
            email:"tracey.ramos@reqres.in",
            first_name:"Tracey",
            last_name:"Ramos",
            avatar:"https://reqres.in/img/faces/6-image.jpg"
        }];
        isTrue:boolean = false;
        selectedEmployee:any;
        name:string = '';

        show(): any{
            console.log('Inside show function');
            if(this.isTrue)
                this.isTrue=false
            else
                this.isTrue = true;

          }


        test(id:number){
            const filteredEmployees = this.employees.filter((employee:any) => employee.id ==id);
            this.selectedEmployee = filteredEmployees[0];
        }
}


