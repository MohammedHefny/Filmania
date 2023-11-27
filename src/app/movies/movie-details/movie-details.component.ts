import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from 'src/app/shared/Movie';
import { HttpRequestService } from 'src/app/shared/Services/http-request.service';
import { MoviesService } from 'src/app/shared/Services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movie!: any;
  constructor(
    private HttpRequest: HttpRequestService,
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}
  movieTitle!: String;
  movieId!: number;
  loading: boolean = false;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.movieTitle = params.title;
      console.log('params', params);
    });
    this.moviesService.getMovies().subscribe((data) => {
      console.log('data', data);
      data.find((s) => {
        if (s.original_title == this.movieTitle) {
          console.log('s', s);
          this.movieId = s.id;
          this.HttpRequest.getMovieDetails(this.movieId).subscribe((data) => {
            this.movie = data;
            console.log('data from movie details', data);
            this.loading = true;
          });
        }
      });
    });
  }
}
