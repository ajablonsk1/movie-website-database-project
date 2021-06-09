import { Injectable } from '@angular/core';
import { WebRequestsService } from './web-requests.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private webService: WebRequestsService) { }

  getUserWithId(userId: string){
    return this.webService.get(`users/${userId}`);
  }
}
