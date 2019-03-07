import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from "rxjs";

import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading = false;
  private authStatusSub: Subscription;

  constructor(public authService: AuthService) {}
  
  @ViewChild('f') signupForm: NgForm;
  username = '';
  password = '';

  onSubmit(f: NgForm) {
    console.log('Submitting!')
    console.log(f)
    if (f.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.login(f.value.email, f.value.password);
  }

  ngOnInit() {
    console.log(this.signupForm);
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
