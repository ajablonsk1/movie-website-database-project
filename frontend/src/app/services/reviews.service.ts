import { Injectable } from '@angular/core';
import { WebRequestsService } from './web-requests.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private webService: WebRequestsService) { }

  getReviewsForGivenMovieId(movieId: string){
    return this.webService.get(`movieReviews/${movieId}`);
  }

  addReviewToDatabase(author: string, stars: number, reviewBody: string, movieID: string){
    return this.webService.post('reviews', {author, stars,reviewBody, movieID});
  }
}
