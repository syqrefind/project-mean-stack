import { Component, Output, EventEmitter } from '@angular/core';
import { ResourceService } from '../resource.service';
import { PageEvent } from '@angular/material';

/**
 * @title Configurable paginator
 */
@Component({
  selector: 'app-paginator',
  templateUrl: 'paginator.component.html',
  styleUrls: ['paginator.component.css'],
})
export class PaginatorComponent {

    data: Array<any>;
    pageEvent: PageEvent;

    length = 75;
    pageSize = 10;
    pageSizeOptions = [10, 20, 50, 75];

    @Output() eventChanged: EventEmitter<any> = new EventEmitter();

    constructor(public resourceService: ResourceService) {}

    onClick(event) {

      console.log('Mat got clicked!!!!!!');
      this.pageEvent = event;
      console.log(`this.pageEvent.pageIndex=${this.pageEvent.pageIndex}\nevent.pageIndex=${event.pageIndex}`);
      this.eventChanged.emit(event);
    //   this.resourceService.readResource(event.pageIndex * event.pageSize, (event.pageIndex + 1) * event.pageSize).subscribe(
    //   response => {
    //     this.data = response.data;
    //   }
    // );
    }

}
