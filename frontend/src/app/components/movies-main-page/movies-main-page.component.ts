import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.model';
import { Stars } from 'src/app/models/stars.model';

@Component({
  selector: 'app-movies-main-page',
  templateUrl: './movies-main-page.component.html',
  styleUrls: ['./movies-main-page.component.css']
})
export class MoviesMainPageComponent implements OnInit {

  movies: Movie[];
  searchedMovies: Movie[];
  isSearchClicked: boolean;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((movies: any) => {
      this.movies = movies;
    })
    this.isSearchClicked = false;
  }

  onSearchClicked(text: string){
    this.moviesService.getMoviesWithSearch(text).subscribe((movies: any) =>{
      this.searchedMovies = movies;
    });
    this.isSearchClicked = true;
  }

}
