import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isLoggedIn: boolean = false;
  constructor(public authService: AuthService){}
  ngOnInit(): void {
    this.authService.authStatus$.subscribe();
  }
  title = 'forum-aei';

}
