import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/Movie';
import { MoviesService } from 'src/app/shared/Services/movies.service';

@Component({
  selector: 'app-searched-movies',
  templateUrl: './searched-movies.component.html',
  styleUrls: ['./searched-movies.component.scss'],
})
export class SearchedMoviesComponent implements OnInit {
  constructor(private MoviesService: MoviesService) {}
  Movies: Movie[] = [];
  ngOnInit(): void {
    this.MoviesService.getMovies().subscribe((data) => {
      this.Movies = data;
    });
  }
}
