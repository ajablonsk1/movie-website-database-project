import { Injectable } from '@angular/core';
import { WebRequestsService } from './web-requests.service';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private webService: WebRequestsService) { }

  getActorWithId(actorId: string){
    return this.webService.get(`actors/${actorId}`);
  }
}
