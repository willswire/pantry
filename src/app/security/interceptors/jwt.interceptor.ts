import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserStorageService } from '../services/user-storage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private userService: UserStorageService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    var isLoggedIn = false;
    this.userService.status.subscribe((status) => {isLoggedIn = status});
    if (isLoggedIn ) {
      let currentToken = this.userService.getToken();
      request = request.clone({
        setHeaders:{
          Authorization : `${currentToken}`
        }
      });
    }
    return next.handle(request);
  }
}
