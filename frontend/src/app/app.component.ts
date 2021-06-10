import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Filmweb';

  constructor(public authService: AuthService){
  }

  logoutClick(){
    this.authService.logout();
  }
}
