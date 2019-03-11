import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { PaginatorComponent } from '../paginator/paginator.component';

@Component({
  selector: 'app-resource-page',
  templateUrl: './resource-page.component.html',
  styleUrls: ['./resource-page.component.css']
})
export class ResourcePageComponent implements OnInit {
  @ViewChild(PaginatorComponent) paginator: PaginatorComponent;
  data: Array<any>;
  columns = ['cost_code', 'name'];


  constructor(public resourceService: ResourceService) {}

  ngOnInit() {
    this.resourceService.readResource(0, 10).subscribe(
      response => {
        this.data = response.data;
      }
    );

  }

  eventChangedHandler(event) {
    console.log('event is handled!!');
    console.log(event.pageIndex);

    this.resourceService.readResource(event.pageIndex * event.pageSize,
      (event.pageIndex + 1) * event.pageSize > 75 ? 75 : (event.pageIndex + 1) * event.pageSize).subscribe(
    response => {
      this.data = response.data;
  });
  }

}
