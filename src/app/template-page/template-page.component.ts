import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-page',
  templateUrl: './template-page.component.html',
  styleUrls: ['./template-page.component.css']
})
export class TemplatePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onAddField() {
    console.log("Adding field!")
  }

}
