import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
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

  constructor(private http: HttpClient, private router: Router) { }

  readResource(resourceData: ResourceData): Observable<ResourceData> {

    console.log('in service, triggered!!!!');

    return this.http.post<ResourceData>(BACKEND_URL + '/readResource/', resourceData);
    // ***********NEED ERROR HANDLING HERE***************
  }

}
