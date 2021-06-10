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
  isSearchClicked: boolean;
  searchedActors: Actor[];

  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    this.actorService.getActors().subscribe((actors: any) => {
      this.actors = actors;
    })
    this.isSearchClicked = false;
  }

  onSearchClicked(text: string){
    this.actorService.getActorsWithSearch(text).subscribe((actors: any) =>{
      this.searchedActors = actors;
    });
    this.isSearchClicked = true;
  }

}
