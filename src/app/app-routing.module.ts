import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies/movies.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SearchedMoviesComponent } from './movies/searched-movies/searched-movies.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { NotFoundComponent } from './shared/NotFound/NotFound';
const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'Home', component: MoviesComponent },
  { path: 'Home/:page', component: MoviesComponent },
  { path: 'search/:name', component: SearchedMoviesComponent },
  { path: 'Wishlist', component: WishlistComponent },
  { path: 'movieDetails/:title', component: MovieDetailsComponent },
  { path: 'PageNotFound', component: NotFoundComponent },
  { path: '**', redirectTo: 'PageNotFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
