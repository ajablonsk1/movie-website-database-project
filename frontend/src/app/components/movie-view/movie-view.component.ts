import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Actor } from 'src/app/models/actor.model';
import { Director } from 'src/app/models/director.model';
import { Movie } from 'src/app/models/movie.model';
import { ActorService } from 'src/app/services/actor.service';
import { DirectorService } from 'src/app/services/director.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent implements OnInit {

  movie: Movie;
  director: Director;
  actors: Actor[];
  selectedMovieId: string;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute,
    private directorsService: DirectorService, private actorsService: ActorService) { }

  ngOnInit(): void {
    this.actors = [];
    this.route.params.subscribe((params: Params) => {
      if(params.movieId){
        this.selectedMovieId = params.movieId;
        this.moviesService.getMovieWithId(params.movieId).subscribe((movie: any) => {
          this.movie = movie;
          this.movie.releaseDate = this.movie.releaseDate.substring(0, 10); 
          this.directorsService.getDirectorWithId(this.movie.director).subscribe((director: any) => {
            this.director = director;
          })
          for(let actorId in this.movie.actors){
            this.actorsService.getActorWithId(this.movie.actors[actorId]).subscribe((actor: any) => {
              this.actors.push(actor);
            })
          }
        })
      }
    })
  }

}
