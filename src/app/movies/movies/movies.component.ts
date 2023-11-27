import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/Movie';
import { MoviesService } from 'src/app/shared/Services/movies.service';
import { HttpRequestService } from 'src/app/shared/Services/http-request.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  constructor(
    private HttpRequest: HttpRequestService,
    private movieService: MoviesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  Movies!: Movie[];
  loading: boolean = false;
  ngOnInit() {
    this.HttpRequest.getAllMovies().subscribe(
      (response: any) => {
        this.movieService.setMovies(response.results);
        this.movieService.getMovies().subscribe((data) => {
          this.Movies = data;
        });
        this.movieService.setMoviesLength(response.total_pages / 100);
        console.log(response);
        console.log('response.results.total_pages', response.total_pages);
        this.router.navigate(['/Home', 1], { relativeTo: this.route });
        this.loading = true;
      },
      (error) => {
        console.log('there is an error');
      }
    );
    // this.loading = true
  }
  pageNum(pageNum: number) {
    this.HttpRequest.getMovieByPage(pageNum).subscribe((Response) => {
      this.movieService.setMovies(Response['results']);
      this.movieService.getMovies().subscribe((data) => {
        this.Movies = data;
      });
      this.router.navigate(['/Home', pageNum]);
      console.log('Response', Response['results']);
    });
  }
}
