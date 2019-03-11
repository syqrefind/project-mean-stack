import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-page',
  templateUrl: './template-page.component.html',
  styleUrls: ['./template-page.component.css']
})
export class TemplatePageComponent implements OnInit {

  // renderTemplate = false;
  // counter: number = 0;
  // counterPlus: number = 0;

  list = [];

  constructor() { }

  ngOnInit() {
  }

  onAddField() {
    console.log("Adding field!");
    this.list.push(1);
    console.log(this.list)
    // this.counterPlus++;
    // if(this.counterPlus > this.counter) {
    //   this.renderTemplate = true;
    //   this.counter = this.counterPlus;
    // }
  }

}
