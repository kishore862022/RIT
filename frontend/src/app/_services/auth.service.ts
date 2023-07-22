import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  isauthenticated(){
    if (sessionStorage.getItem('token') !== null){
        return true;}
        return false;
  }
canAccess(){
  if(this.isauthenticated()){
    this.router.navigate(["login"])
  }
}

}
