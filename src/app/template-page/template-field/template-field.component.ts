import { Component, OnInit } from '@angular/core';
import { Type } from './type';

@Component({
  selector: 'app-template-field',
  templateUrl: './template-field.component.html',
  styleUrls: ['./template-field.component.css']
})
export class TemplateFieldComponent implements OnInit {

  selectedType: Type = new Type(1, 'Number');
  types = [
    new Type(1, 'Number'),
    new Type(2, 'Text'),
    new Type(3, 'Formula')
  ]

  selectedTypeId: number;

  constructor() { }

  ngOnInit() {
  } 

  onSelect(typeId) {
    this.selectedTypeId = typeId;
    console.log(this.selectedType.id)
  }

}
