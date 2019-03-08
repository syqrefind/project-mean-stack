import { Component } from '@angular/core';
import { PageEvent } from '@angular/material';
import { PaginationService } from '../pagination.service';

/**
 * @title Configurable paginator
 */
@Component({
  selector: 'app-paginator',
  templateUrl: 'paginator.component.html',
  styleUrls: ['paginator.component.css'],
})
// export class PaginatorComponent extends PaginationService {
export class PaginatorComponent {

    constructor(paginationService: PaginationService) {}

  // displayRandom() {
  //   console.log('RANDOMRANDOMRANDOMRANDOMRANDOMRANDOMRANDOMRANDOMRANDOMRANDOMRANDOMRANDOMRANDOM');
  // }

  // *************try writing a method that subscribe to pageEvent; return an obeservable**************


  // setPageSizeOptions(setPageSizeOptionsInput: string) {
  //   this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  // }
}
