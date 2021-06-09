import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movies-main-page',
  templateUrl: './movies-main-page.component.html',
  styleUrls: ['./movies-main-page.component.css']
})
export class MoviesMainPageComponent implements OnInit {

  movies: Movie[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((movies: any) => {
      this.movies = movies;
    })
  }

}
