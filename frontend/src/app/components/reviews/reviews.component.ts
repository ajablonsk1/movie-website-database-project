import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { Review } from 'src/app/models/review.model';
import { User } from 'src/app/models/user.model';
import { MoviesService } from 'src/app/services/movies.service';
import { ReviewsService } from 'src/app/services/reviews.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Review[];
  selectedMovieId: string;
  authors: User[];
  movie: Movie;

  constructor(private reviewService: ReviewsService, private route: ActivatedRoute, 
    private userService: UserService, private movieService: MoviesService) { }

  ngOnInit(): void {
    this.authors = [];
    this.route.params.subscribe((params: Params) => {
      if(params.movieId){
        this.selectedMovieId = params.movieId;
        this.movieService.getMovieWithId(params.movieId).subscribe((movie: any) => {
          this.movie = movie;
        })
        this.reviewService.getReviewsForGivenMovieId(params.movieId).subscribe((reviews: any) => {
          this.reviews = reviews;
          for(let i = 0; i < this.reviews.length; i++){
            this.userService.getUserWithId(reviews[i].author).subscribe((author: any) => {
              this.reviews[i].author = author.email;
            })
          }
        })
      }
    })
  }

}
