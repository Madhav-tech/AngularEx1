import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/UserService/user.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuardGuard implements CanActivate {
  
  constructor(private router:Router,private userService:UserService){
    this.userService=userService;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("OnlyLoggedInUsers");
      if (this.userService.isLoggedIn()) { 
        return true;
      } else {
        window.alert("You don't have permission to view this page\n login to view this page");

        this.router.navigate(['/login'])
      }
      return false;
  }
  
}
