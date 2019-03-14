import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading = false;
  private authStatusSub: Subscription;

  constructor(public authService: AuthService, private loginService: LoginService) {}

  @ViewChild('f') signupForm: NgForm;
  // username = 'test_user';
  password = '';

  onSubmit(f: NgForm) {
    console.log('Submitting!');
    if (f.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.login(f.value.userData.username, f.value.userData.password);
    this.loginService.username = f.value.userData.username;
    // console.log(this.loginService.username);
    this.loginService.changeUserName(f.value.userData.username);
  }

  ngOnInit() {
    // console.log(this.signupForm);
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}
