import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css']
})
export class TopMoviesComponent implements OnInit {

  isClicked: boolean;

  movies: Movie[];

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.isClicked = false;
  }

  onSubmitClicked(n: string){
    let m = parseInt(n);
    this.movieService.getTopMovies(m).subscribe((movies: any) => {
      this.movies = movies;
      console.log(movies);
    })
    this.isClicked = true;
  }

}
