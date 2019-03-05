import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  popoverTitle = "Cost Manager Member since November-2015";

  constructor() { }

  ngOnInit() {
  }

}
