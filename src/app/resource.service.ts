import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthInterceptor } from './auth-interceptor';
// import { HttpRequest, HttpHandler } from "@angular/common/http";
// import { OnInit } from '@angular/core';

import { ResourceData } from './resource-data.model';

const BACKEND_URL = 'http://localhost:3000/api' + '/resource';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token',
  })
};


@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private resourceStatusListener = new Subject<boolean>();
  public startIndex = 0;
  public endIndex = 15;
  // handler: HttpHandler;
  // request: HttpRequest<ResourceData>;

  constructor(private http: HttpClient, private router: Router) { }

  readResource(start: number, end: number): Observable<ResourceData> {
    return (this.http.get<ResourceData>(`${BACKEND_URL}/readResourceViaGet/${start}-${end}`));
    // this.request = this.http.get<ResourceData>(`${BACKEND_URL}/readResourceViaGet/${start}-${end}`);
    // return this.authInterceptor.intercept((this.http.get<ResourceData>(`${BACKEND_URL}/readResourceViaGet/${start}-${end}`)), this.handler);
  }

}
