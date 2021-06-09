import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSignupButtonClicked(email: string, password1: string, password2: string){
    if(password1 === password2){
      this.authService.signup(email, password1).subscribe((res: HttpResponse<any>) => {
        console.log(res);
      });
    }
    else{

    }
  }

  wrongPasswords(password1: string, password2: string){
    if(password1 === password2){
      return false;
    }
    else{
      return true;
    }
  }
}
