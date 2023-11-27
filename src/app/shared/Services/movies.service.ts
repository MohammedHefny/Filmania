import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../Movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor() {}

  // Movies Data
  // private Movies!: Movie[];
  // getMovies() {
  //   return this.Movies;
  // }
  // setMovies(newMovies: Movie[]) {
  //   this.Movies = newMovies;
  // }
  private Movies = new BehaviorSubject<Movie[]>([]);
  getMovies() {
    return this.Movies.asObservable();
  }
  setMovies(newMovies: Movie[]) {
    this.Movies.next(newMovies);
  }
  // Movies Data

  // this auto calc the number of pages brought from the server
  private moviesLength = new BehaviorSubject<number>(0);
  getMoviesLength() {
    return this.moviesLength.asObservable();
  }
  setMoviesLength(newMoviesLength: number) {
    this.moviesLength.next(newMoviesLength);
  }

  // Wishlist films
  wishlistFilm = new BehaviorSubject<Movie[]>([]);
  wishlistFilmIsAlreadyAdded = new BehaviorSubject<string>('');
  getwishlistFilmIsAlreadyAdded() {
    console.log(
      'this.wishlistFilmIsAlreadyAdded',
      this.wishlistFilmIsAlreadyAdded.value
    );
    return this.wishlistFilmIsAlreadyAdded.asObservable();
  }
  setwishlistFilmIsAlreadyAdded(msg: string) {
    this.wishlistFilmIsAlreadyAdded.next(msg);
  }
  setwishlistFilm(newFilm: Movie) {
    const currentWishlist = this.wishlistFilm.value;

    // Check if the movie with the same id is already in the wishlist
    const isMovieInWishlist = currentWishlist.some(
      (movie) => movie.id === newFilm.id
    );

    if (!isMovieInWishlist) {
      const updatedWishlist = [...currentWishlist, newFilm];
      this.wishlistFilm.next(updatedWishlist);
    } else {
      this.wishlistFilmIsAlreadyAdded.next('Film Is Already Added');
    }
  }
  getwishlistFilm() {
    console.log('this.wishlistFilm', this.wishlistFilm.value);
    return this.wishlistFilm.asObservable();
  }
  removewishlistFilm(Film: Movie) {
    const currentWishlist = this.wishlistFilm.value;
    const updatedWishlist = currentWishlist.filter((movie) => movie !== Film);
    this.wishlistFilm.next(updatedWishlist);
  }
}
