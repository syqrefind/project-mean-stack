import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { PageEvent } from '@angular/material';
import { PaginationService } from '../pagination.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-resource-page',
  templateUrl: './resource-page.component.html',
  styleUrls: ['./resource-page.component.css']
})
export class ResourcePageComponent implements OnInit {
  data: Array<any>;
  columns = ['cost_code', 'name'];

  // pageSize: number;
  // length: number;
  // pageSizeOptions: number[];
  // pageIndex: number;
  // pageEvent: PageEvent;

  selectedData: Array<object>;

  // @ViewChild(PaginatorComponent) child: PaginatorComponent;

  constructor(public resourceService: ResourceService, public paginationService: PaginationService) {}

  ngOnInit() {
    // subscribe to paginator change and in result: subscribe to response
    this.resourceService.readResource().subscribe(
      response => {
        this.data = response.data;
      }
    );

  }

}
