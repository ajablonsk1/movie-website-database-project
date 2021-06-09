import { Injectable } from '@angular/core';
import { WebRequestsService } from './web-requests.service';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  constructor(private webService: WebRequestsService) { }

  getDirectorWithId(directorId: string){
    return this.webService.get(`directors/${directorId}`);
  }
}
