import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor.model';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actor-main-page',
  templateUrl: './actor-main-page.component.html',
  styleUrls: ['./actor-main-page.component.css']
})
export class ActorMainPageComponent implements OnInit {

  actors: Actor[];

  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    this.actorService.getActors().subscribe((actors: any) => {
      this.actors = actors;
    })
  }

}
