import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { Stars } from 'src/app/models/stars.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css']
})
export class TopMoviesComponent implements OnInit {

  isClicked: boolean;

  movies: Movie[];

  stars: number[];

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.isClicked = false;
  }

  onSubmitClicked(n: string){
    let m = parseInt(n);
    this.stars = [];
    this.movieService.getTopMovies(m).subscribe((movies: any) => {
      this.movies = movies;
      for(let movieIdx in this.movies){
        this.movies[movieIdx].avgStars = String(Math.round(Number(this.movies[movieIdx].avgStars) * 100) /100);
      }
    })
    this.isClicked = true;
  }

}
