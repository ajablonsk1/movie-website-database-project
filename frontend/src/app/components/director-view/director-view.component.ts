import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Director } from 'src/app/models/director.model';
import { Movie } from 'src/app/models/movie.model';
import { DirectorService } from 'src/app/services/director.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-director-view',
  templateUrl: './director-view.component.html',
  styleUrls: ['./director-view.component.css']
})
export class DirectorViewComponent implements OnInit {

  director: Director;
  selectedDirectorId: string;
  topMovies: Movie[];

  constructor(private directorsService: DirectorService, private route: ActivatedRoute,
    private movieService: MoviesService) { }

  ngOnInit(): void {
    this.topMovies = [];
    this.route.params.subscribe((params: Params) => {
      if(params.directorId){
        this.selectedDirectorId = params.directorId;
        this.directorsService.getDirectorWithId(params.directorId).subscribe((director: any) => {
          this.director = director;
          for(let movieIdx in this.director.topMovies){
            this.movieService.getMovieWithId(this.director.topMovies[movieIdx]).subscribe((movie: any) => {
              this.topMovies.push(movie);
            })
          }
          this.director.dateOfBirth = this.director.dateOfBirth.substring(0, 10);
          this.director.dateOfDeath = this.director.dateOfDeath.substring(0, 10);
        })
      }
    })
  }

}
