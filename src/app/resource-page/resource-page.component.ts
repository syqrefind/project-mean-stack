import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-resource-page',
  templateUrl: './resource-page.component.html',
  styleUrls: ['./resource-page.component.css']
})
export class ResourcePageComponent implements OnInit {
  data: Array<any>;
  columns = ['cost_code', 'name'];

  constructor(public resourceService: ResourceService) {}

  ngOnInit() {
    this.resourceService.readResource({title: 'project1'}).subscribe(
      response => {
        // console.log(response.data);
        this.data = response.data;
        console.log(this.data);
      }
    );
  }

}
