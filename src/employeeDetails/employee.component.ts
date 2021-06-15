import{Component, Input} from '@angular/core';


@Component({
    templateUrl:'employee.component.html',
    selector:'employee_detail'
})

export class EmployeeDetail{
    @Input() employee:any=null;
}   
