import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  popoverTitle = "Cost Manager Member since November-2015";

  // @Input() username: string;

  costManager = this.loginService.username;
  

  ngOnInit() {
  }

}
