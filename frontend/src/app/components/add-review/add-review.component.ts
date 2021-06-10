import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { combineLatest } from 'rxjs/operators';
import { Review } from 'src/app/models/review.model';
import { AuthService } from 'src/app/services/auth.service';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  constructor(private authService: AuthService, private route: ActivatedRoute,
    private reviewService: ReviewsService, private router: Router) { }

  isLoggedIn: boolean;
  selectedMovieId: string; 

  ngOnInit(): void {
    console.log(this.authService.getUserId());
    if(this.authService.getUserId() === null){
      this.isLoggedIn = false;
    }
    else{
      this.isLoggedIn = true;
    } 
    this.route.params.subscribe((params: Params) => {
      if(params.movieId){
        this.selectedMovieId = params.movieId;
      }
    })
  }

  submitReview(inputText: string, rating: string){
    let stars = parseInt(rating);
    console.log(this.authService.getUserId());
    console.log(stars);
    console.log(inputText);
    console.log(this.selectedMovieId);
    this.reviewService.addReviewToDatabase(this.authService.getUserId()!, stars, inputText, this.selectedMovieId).subscribe((newReview: any) => {
      console.log(newReview);
    });
    this.router.navigate([`reviews/${this.selectedMovieId}`])
  }

}
