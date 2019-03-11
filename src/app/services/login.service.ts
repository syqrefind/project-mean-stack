import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  username: string;

  changeUserName(str) {
    this.username = str;
    console.log(this.username);
  }

}
