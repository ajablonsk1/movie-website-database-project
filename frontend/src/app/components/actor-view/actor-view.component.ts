import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Actor } from 'src/app/models/actor.model';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actor-view',
  templateUrl: './actor-view.component.html',
  styleUrls: ['./actor-view.component.css']
})
export class ActorViewComponent implements OnInit {

  actor: Actor;
  selectedActorId: string;

  constructor(private actorsService: ActorService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if(params.actorId){
        this.selectedActorId = params.actorId;
        this.actorsService.getActorWithId(params.actorId).subscribe((actor: any) => {
          this.actor = actor;
          this.actor.dateOfDeath = this.actor.dateOfDeath.substring(1, 10);
          this.actor.dateOfBirth = this.actor.dateOfBirth.substring(1, 10);
        })
      }
    })
  }

}
