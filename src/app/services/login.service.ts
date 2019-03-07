import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  username: string = "test_manager";

  changeUserName(str) {
    this.username = str;
    console.log(this.username)
  }

  

}
