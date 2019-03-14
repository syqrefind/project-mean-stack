import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { ResourceService } from '../resource.service';
import { PaginatorComponent } from '../paginator/paginator.component';
import { SharedserviceService } from '../sharedservice.service';

// declare function goSticky(): any;

@Component({
  selector: 'app-formula-page',
  templateUrl: './formula-page.component.html',
  styleUrls: ['./formula-page.component.css']
})
export class FormulaPageComponent implements OnInit {
  @ViewChild(PaginatorComponent) paginator: PaginatorComponent;


  data: Array<any>;
  columns = ['cost_code', 'name'];
  Tabthird: [];

  constructor(public resourceService: ResourceService, public sharedserviceService: SharedserviceService) {
  //   this.sharedserviceService.datum$.subscribe(
  //     data => {
  //         this.datum = data;
  //     });
  // }
  }



  ngOnInit() {
    this.resourceService.readResource(0, 10).subscribe(
      response => {
        this.data = response.data;
      }
    );
  }

  eventChangedHandler(event) {
    // console.log('event is handled!!');
    // console.log(event.pageIndex);

    this.resourceService.readResource(event.pageIndex * event.pageSize,
      (event.pageIndex + 1) * event.pageSize > 75 ? 75 : (event.pageIndex + 1) * event.pageSize).subscribe(
    response => {
      this.data = response.data;
  });
  }





  }
