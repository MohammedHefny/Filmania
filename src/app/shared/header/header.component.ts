import { Component } from '@angular/core';
import { MoviesService } from '../Services/movies.service';
import { HttpRequestService } from '../Services/http-request.service';
import { Movie } from '../Movie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private moviesService: MoviesService,
    private HttpRequest: HttpRequestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  searchWord: string = '';
  Movies!: Movie[];

  onSubmit(SearchedWord: string) {
    console.log('SearchedWord', SearchedWord);
    this.searchWord = '';
    // this.moviesService.setSearchedFilm(SearchedWord);
    // ========================================
    this.HttpRequest.searchInAllMovies(SearchedWord).subscribe((data) => {
      this.moviesService.setMovies(data['results']);
      this.moviesService.getMovies().subscribe((data) => {
        this.Movies = data;
      });
      console.log(this.Movies);
      this.router.navigate(['/search', SearchedWord]);
    });
  }
}
