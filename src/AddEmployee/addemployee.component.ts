import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, NgForm, Validators, } from "@angular/forms";
import { EmployeeService } from "src/EmployeeServices/employee.service";
import { Employee } from "src/EmployeeServices/employee";

@Component({
    selector:'add_employee',
    templateUrl:'addemployee.component.html'
})
export class AddEmployee implements OnInit {
    employeeForm = new FormGroup({
        id : new FormControl(''),
        first_name: new FormControl(''),
        last_name:new FormControl(''),
        email:new FormControl(''),
        avatar: new FormControl('')
    });
    employee!: Employee ;
    id:any;
    sub:any;
    constructor(
        private fb:FormBuilder, 
        private router: Router,
        private empService: EmployeeService
        ) { 
        }
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
   
    onSubmit(_form: any) {
        if(_form.valid){
            console.log(_form.value);
            if(this.empService.addEmployee(_form.value)){
                this.router.navigate(['employeelist'])
            }
            else{
                window.alert("Enter unique ID");
            }
        }
      }
}
