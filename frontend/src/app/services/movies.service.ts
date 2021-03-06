import { Injectable } from '@angular/core';
import { WebRequestsService } from './web-requests.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private webService: WebRequestsService) { }

  getMovies(){
    return this.webService.get('movies');
  }

  getMovieWithId(movieId: string){
    return this.webService.get(`movies/${movieId}`);
  }

  getTopMovies(n: number){
    return this.webService.get(`getTopNMovies/${n}`);
  }

  getMoviesWithSearch(text: string){
    return this.webService.get(`moviesByTitle/${text}`);
  }

  getAvgStarsWithMovieId(movieId: string){
    return this.webService.get(`starsByMovieId/${movieId}`);
  }
  getAvgStarsWithMovieTitle(movieId: string){
    return this.webService.get(`starsByMovieTitle/${movieId}`);
  }
}
