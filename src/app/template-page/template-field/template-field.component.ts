import { Component, OnInit, Input, Output } from '@angular/core';
import { Type } from './type';
import { debugOutputAstAsTypeScript } from '@angular/compiler';

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
  ];

  fieldName = '';

  selectedTypeId: number;

  constructor() { }

  ngOnInit() {
  }

  onSelect(typeId) {
    // console.log(typeId);
    // this.selectedTypeId = typeId;
    // console.log(this.selectedTypeId)
    this.types.forEach(el => {
      if (el.id === typeId) {
        // console.log(el);
        this.selectedType = el;
      }
    });
    // console.log(this.selectedType.id, this.selectedType.name)
  }

}
