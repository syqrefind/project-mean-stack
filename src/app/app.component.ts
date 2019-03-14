import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from './environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'team-project';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    console.log('environment url is '+ environment.apiUrl);
    this.authService.autoAuthUser();

  }

}
