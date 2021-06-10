import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Actor } from 'src/app/models/actor.model';
import { Movie } from 'src/app/models/movie.model';
import { ActorService } from 'src/app/services/actor.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-actor-view',
  templateUrl: './actor-view.component.html',
  styleUrls: ['./actor-view.component.css']
})
export class ActorViewComponent implements OnInit {

  actor: Actor;
  selectedActorId: string;
  topMovies: Movie[];

  constructor(private actorsService: ActorService, private route: ActivatedRoute,
    private movieService: MoviesService) { }

  ngOnInit(): void {
    this.topMovies = [];
    this.route.params.subscribe((params: Params) => {
      if(params.actorId){
        this.selectedActorId = params.actorId;
        this.actorsService.getActorWithId(params.actorId).subscribe((actor: any) => {
          this.actor = actor;
          for(let movieIdx in this.actor.topMovies){
            this.movieService.getMovieWithId(this.actor.topMovies[movieIdx]).subscribe((movie: any) => {
              this.topMovies.push(movie);
            })
          }
          this.actor.dateOfBirth = this.actor.dateOfBirth.substring(0, 10);
          this.actor.dateOfDeath = this.actor.dateOfDeath.substring(0, 10);
        })
      }
    })
  }

}
