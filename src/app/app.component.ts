import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logged: boolean = false;
  title = 'forum-aei';

  userLoggedIn(loggedIn: boolean){
    this.logged = loggedIn;
    console.log(this.logged)
  }
}
