import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebRequestsService } from './web-requests.service';
import { shareReplay, tap } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private webService: WebRequestsService, private router: Router, private http: HttpClient) { }

  login(email: string, password: string){
    return this.webService.login(email, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        this.setSession(res.body._id, res.headers.get('x-access-token')!, res.headers.get('x-refresh-token')!);
        console.log('Logged in!');
        console.log(this.getUserId())
      })
    )
  }

  signup(email: string, password: string){
    return this.webService.signup(email, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        this.setSession(res.body._id, res.headers.get('x-access-token')!, res.headers.get('x-refresh-token')!);
        console.log('Succesfully signed up and now logged in!');
      })
    )
  }

  private setSession(userId: string, acccessToken: string, refreshToken: string){
    localStorage.setItem('user_id', userId);
    localStorage.setItem('x-access-token', acccessToken);
    localStorage.setItem('x-refresh-token', refreshToken);
  }

  private removeSession(){
    localStorage.removeItem('user_id');
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('x-refresh-token');
  }

  logout(){
    this.removeSession();
    console.log('Logged out!');
  }

  getAccessToken(){
    return localStorage.getItem('x-access-item');
  }

  setAccessToken(accessToken: string){
    localStorage.setItem('x-access-token', accessToken);
  }

  getRefreshToken(){
    return localStorage.getItem('x-refresh-token');
  }

  getUserId(){
    return localStorage.getItem('user_id');
  }

  getNewAccessToken(){
    return this.http.get(`${this.webService.ROOT_URL}/users/me/access-token`, {
      headers: {
        'x-refresh-token': this.getRefreshToken()!,
        '_id': this.getUserId()!
      },
      observe: 'response'
    }).pipe(
      tap((res: HttpResponse<any>) => {
        this.setAccessToken(res.headers.get('x-access-token')!);
      })
    )
  }
}
