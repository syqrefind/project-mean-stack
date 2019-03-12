import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../services/login.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  isAuth = false;
  userId = '';

  constructor(public loginService: LoginService, public authService: AuthService) { }

  popoverTitle = 'Cost Manager Member since November-2015';

  // @Input() username: string;

  // costManager = this.loginService.username;


  ngOnInit() {
    this.isAuth = this.authService.getIsAuth();
    if (this.isAuth){
      this.userId = this.authService.parseJwt(localStorage.getItem('token')).email;
    }
   
    // console.log(`this.authService.getUserId returns ${this.authService.getUserId()}`);
  }

}
