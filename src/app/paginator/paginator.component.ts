import { Component } from '@angular/core';
import { PaginationService } from '../pagination.service';

/**
 * @title Configurable paginator
 */
@Component({
  selector: 'app-paginator',
  templateUrl: 'paginator.component.html',
  styleUrls: ['paginator.component.css'],
})
export class PaginatorComponent {

    constructor(public paginationService: PaginationService) {}

}
