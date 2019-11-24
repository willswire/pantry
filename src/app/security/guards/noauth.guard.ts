import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

import { UserStorageService } from '../services/user-storage.service'

@Injectable({
  providedIn: 'root'
})
export class NoauthGuard implements CanActivate {
  constructor(
    private _userSvc: UserStorageService,
    private _router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isLoggedIn = false;
      this._userSvc.status.subscribe(( status: boolean ) => {
        isLoggedIn = status;
      });
      if (!isLoggedIn) {
        return true;
      } else {
        this._router.navigate(['lists']);
        return false;
      }
    }
}
