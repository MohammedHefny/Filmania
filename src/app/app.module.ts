import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesHolderComponent } from './movies/movies-holder/movies-holder.component';
import { MoviesComponent } from './movies/movies/movies.component';
import { HeaderComponent } from './shared/header/header.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movies/movie/movie.component';
import { SlicerPipe } from './shared/pipes/slicer.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdPaginationCustomization } from './shared/pagination/Pagination-customization';
import { RateHeart } from './shared/rating-hearts/Rating-decimal';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './shared/Spinner/spinner';
import { SearchPipe } from './shared/pipes/search.pipe';
import { SearchedMoviesComponent } from './movies/searched-movies/searched-movies.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { NotFoundComponent } from './shared/NotFound/NotFound';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastComponent } from './shared/Toasts/Toast/toast-global.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesHolderComponent,
    MoviesComponent,
    HeaderComponent,
    WishlistComponent,
    MovieComponent,
    SlicerPipe,
    SearchPipe,
    SearchedMoviesComponent,
    MovieDetailsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    NgbdPaginationCustomization,
    RateHeart,
    SpinnerComponent,
    NotFoundComponent,
    ToastComponent,
  ],
})
export class AppModule {}
