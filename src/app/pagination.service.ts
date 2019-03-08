import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

// MatPaginator Inputs
  length = 75;
  pageSize = 10;
  pageSizeOptions: number[] = [10, 20, 50, 75];

  // MatPaginator Output
  pageEvent: PageEvent;


  constructor() { }
}
