import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

constructor() { }

// MatPaginator Inputs
  public length = 75;
  public pageSize = 10;
  public pageSizeOptions: number[] = [10, 20, 50, 75];

  // MatPaginator Output
  public pageEvent: PageEvent;

  public getStartIndex() {
    return (this.pageEvent.pageIndex - 1) * this.pageEvent.pageSize;
  }

  public getEndIndex() {
    return this.pageEvent.pageIndex * this.pageEvent.pageSize;
  }

}
