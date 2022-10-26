import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  constructor() {}
  // unknown vs any
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // rest api
    // time tracking

    const startTime: Date = new Date();
    console.log(JSON.stringify(request));
    // data

    return next.handle(request).pipe(
      tap((e: any): void => {
        console.log(JSON.stringify(e));

        console.log((new Date().valueOf() - startTime.valueOf()) / 1000);
        //  return { headers: e.headers, statusText: e.statusText };
      })
    );
  }
}

// limiting the tracking to specific domain : https://api.ca.com
// https://api2.ca.com

// threshold for tracking the request.
