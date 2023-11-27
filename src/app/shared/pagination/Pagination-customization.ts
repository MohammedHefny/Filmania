import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MoviesService } from '../Services/movies.service';
import { HttpRequestService } from '../Services/http-request.service';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-pagination-customization',
  standalone: true,
  imports: [NgbPaginationModule, BrowserModule],
  templateUrl: 'pagination-customization.html',
  styleUrls: ['pagination-customization.scss'],
})
export class NgbdPaginationCustomization implements OnInit {
  constructor(
    private moviesService: MoviesService,
    private httpRequestService: HttpRequestService
  ) {}
  page: number = 1;
  pageNum: number = 1;
  ngOnInit(): void {
    this.moviesService.getMoviesLength().subscribe((num) => {
      console.log('num', num);
      this.pageNum = num;
      console.log('num after page update', num);
    });
  }

  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }
  // to send the number of pagination clicked to the parent
  @Output() myEvent = new EventEmitter();
  onPageChange(page: number) {
    this.myEvent.emit(page);
  }
  pageInput!: number;

  onPageInputChange(value: number) {
    // Handle the page change when the input value changes
    console.log('value.target.value', value['target'].value);
    this.onPageChange(value['target'].value);
  }
}
