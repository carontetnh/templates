import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate {

  constructor(private router: Router, private userService : UserService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.userService.getSessionVariable();
  }
  
}
