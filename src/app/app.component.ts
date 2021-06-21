import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/UserService/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularEx1';
  employee:any={};
  constructor(private userService:UserService,private router:Router)
  { this.userService = userService;}

  notifyEmployee($event:any){
    //console.log('$event')
   // console.log($event)
    this.employee=$event;
  } 
  Logout(){
      this.userService.setLogin(false);
      this.router.navigate(['/login']);
  }
  
}
