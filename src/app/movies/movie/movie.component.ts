import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/Movie';
import { HttpRequestService } from 'src/app/shared/Services/http-request.service';
import { MoviesService } from 'src/app/shared/Services/movies.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() Movies!: Movie[];
  filmName!: string;
  show: boolean = true;
  faHeart = faHeart;

  constructor(
    private moviesService: MoviesService,
    private HttpRequest: HttpRequestService
  ) {}
  ngOnInit(): void {}
  msg: string = 'Add';
  messagesMap: Map<number, string> = new Map<number, string>();
  onAddToWish(Movie: Movie) {
    // this.msg = 'Added';
    // this.moviesService.setwishlistFilm(Movie);
    const messageId = Movie.id;
    const message = 'Added'; // Set your desired message here

    this.messagesMap.set(messageId, message);
    this.moviesService.setwishlistFilm(Movie);
  }
}
