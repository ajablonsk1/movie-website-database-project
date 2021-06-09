import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { MoviesMainPageComponent } from './components/movies-main-page/movies-main-page.component';
import { TopMoviesComponent } from './components/top-movies/top-movies.component';
import { HomeComponent } from './components/home/home.component';
import { MovieViewComponent } from './components/movie-view/movie-view.component';
import { ActorViewComponent } from './components/actor-view/actor-view.component';
import { DirectorViewComponent } from './components/director-view/director-view.component';
import { DirectorMainPageComponent } from './components/director-main-page/director-main-page.component';
import { ActorMainPageComponent } from './components/actor-main-page/actor-main-page.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AddReviewComponent } from './components/add-review/add-review.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    MoviesMainPageComponent,
    TopMoviesComponent,
    HomeComponent,
    MovieViewComponent,
    ActorViewComponent,
    DirectorViewComponent,
    DirectorMainPageComponent,
    ActorMainPageComponent,
    ReviewsComponent,
    AddReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
