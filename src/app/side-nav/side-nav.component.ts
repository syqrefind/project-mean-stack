import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  events: string[] = [];
  opened: boolean;
  url: string;
  htmlId: any;

  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  shouldRun = true;

  ngOnInit() {
  }

  onClick(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.href.nodeValue;
    this.htmlId = idAttr;
    console.log(this.htmlId);
    this.activatedRoute.url
    .subscribe(url => console.log('The URL changed to ' + url));
  }

}
