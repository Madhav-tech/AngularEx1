import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class UserService{
    private login:boolean = false;

    setLogin(login:boolean){
        this.login=login;
    }

    getUserName():string{
        return "user";
    }
    getPassword():string{
        return "user123";
    }
    isLoggedIn(): boolean {
        return this.login;
      }
}