import { Component, OnInit, ViewChild } from '@angular/core';
import { Field } from './field';
import { TemplateFieldComponent } from './template-field/template-field.component'
import { ChildActivationEnd } from '@angular/router';

@Component({
  selector: 'app-template-page',
  templateUrl: './template-page.component.html',
  styleUrls: ['./template-page.component.css']
})
export class TemplatePageComponent implements OnInit {

  @ViewChild(TemplateFieldComponent) child: TemplateFieldComponent;

  list = [];
  fields: any;
  clickEventParent: any;

  constructor() { }

  ngOnInit() {
    console.log("On init!")
    if(!localStorage.getItem('fields')) {
      localStorage.setItem('fields', '[]')
    }
    console.log(localStorage.getItem('fields'))
  }

  onAddField(event) {
    console.log("Adding field!");
    this.list.push(1);
    this.fields = localStorage.getItem('fields');
    console.log(this.fields)
  }

  onSave(event) {
    console.log(event.target);
    console.log(this.child.fieldName)
  }

}
