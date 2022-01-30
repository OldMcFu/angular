import { Component } from '@angular/core';
 
import UsersJson from './users.json';
   
interface USERS {
    what: String;
    text: String;
}
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
 
export class AppComponent {
   
  Users: USERS[] = UsersJson;
  clickMessage = '';

  constructor(){
    console.log(this.Users);
  }

  onClickMe() {
    this.clickMessage = 'You are my hero!';
    console.log(this.clickMessage);
  }
}

