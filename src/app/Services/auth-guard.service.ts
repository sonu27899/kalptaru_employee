import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private _route:Router) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean{

    if(localStorage.getItem('email')=="")
    {
      this._route.navigate(['not-found']);

    }
    else
    {
      return true;
    }
  }
}
