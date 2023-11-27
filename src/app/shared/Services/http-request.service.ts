import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  private baseUrl = 'https://api.themoviedb.org/3/movie/popular';
  private apiKey = '3ceeef9daa61c840e148bc4faf01915d';
  constructor(private http: HttpClient) {}
  getAllMovies(): Observable<Object> {
    let params = new HttpParams().set('api_key', this.apiKey);
    return this.http.get(`${this.baseUrl}`, { params: params });
  }
  getMovieByPage(pageNum: number): Observable<Object> {
    let params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('page', pageNum.toString());
    // https://api.themoviedb.org/3/movie/popular?api_key={api_key}&page=4

    return this.http.get(`${this.baseUrl}`, { params: params });
  }
  private searchBaseUrl = 'https://api.themoviedb.org/3/search/movie';
  searchInAllMovies(filmName: string) {
    let params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('query', filmName);
    return this.http.get(`${this.searchBaseUrl}`, { params: params });
    // https://api.themoviedb.org/3/search/movie?api_key=3ceeef9daa61c840e148bc4faf01915d&query=tra
  }

  getMovieDetails(filmId: number) {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/' + filmId + '?api_key=' + this.apiKey
    );
  }
}
