import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { ChildActivationEnd } from '@angular/router';
import { PaginatorComponent } from '../paginator/paginator.component';
import { PageEvent } from '@angular/material';
import { PaginationService } from '../pagination.service';
@Component({
  selector: 'app-resource-page',
  templateUrl: './resource-page.component.html',
  styleUrls: ['./resource-page.component.css']
})
export class ResourcePageComponent implements OnInit {
  data: Array<any>;
  columns = ['cost_code', 'name'];

  pageSize: number;
  length: number;
  pageSizeOptions: number[];
  pageIndex: number;
  pageEvent: PageEvent;

  selectedData: Array<object>;

  // @ViewChild(PaginatorComponent) child: PaginatorComponent;

  constructor(public resourceService: ResourceService) {}

  ngOnInit() {
    this.resourceService.readResource({title: 'project1'}).subscribe(
      response => {
        this.data = response.data;
      }
    );

  }

}
