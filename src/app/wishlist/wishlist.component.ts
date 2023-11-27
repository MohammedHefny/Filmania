import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/Services/movies.service';
import { Movie } from '../shared/Movie';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  Movies!: Movie[];
  faHeart = faHeart;
  loader: boolean = false;
  constructor(private movieService: MoviesService) {}
  ngOnInit(): void {
    this.movieService.getwishlistFilm().subscribe((data: Movie[]) => {
      this.Movies = data;
      this.loader = true;
    });
  }
  onRemoveFromWish(Movie: Movie) {
    this.movieService.removewishlistFilm(Movie);
  }
}
