import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { MoviesMainPageComponent } from './components/movies-main-page/movies-main-page.component';
import { TopMoviesComponent } from './components/top-movies/top-movies.component';
import { HomeComponent } from './components/home/home.component';
import { MovieViewComponent } from './components/movie-view/movie-view.component';
import { ActorViewComponent } from './components/actor-view/actor-view.component';
import { DirectorViewComponent } from './components/director-view/director-view.component';
import { ActorMainPageComponent } from './components/actor-main-page/actor-main-page.component';
import { DirectorMainPageComponent } from './components/director-main-page/director-main-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: 'movies', component: MoviesMainPageComponent},
  {path: 'top-movies', component: TopMoviesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'movies/:movieId', component: MovieViewComponent},
  {path: 'actors/:actorId', component: ActorViewComponent},
  {path: 'directors/:directorId', component: DirectorViewComponent},
  {path: 'actors', component: ActorMainPageComponent},
  {path: 'directors', component: DirectorMainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
