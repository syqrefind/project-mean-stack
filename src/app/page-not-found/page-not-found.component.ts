import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  //   this.route.queryParams.subscribe(params => {
  //     console.log(params);
  //     if (params.msg === 'doomed') {
  //       console.log('You forgot your password. You are DOOMED.');
  //     }
  // });
  }

}
