import { Component, Input } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-rating-decimal',
  standalone: true,
  imports: [NgbRatingModule, BrowserModule],
  templateUrl: './rating-decimal.html',
  styles: [
    `
      i {
        position: relative;
        display: inline-block;
        font-size: 1rem;
        padding-right: 0.1rem;
        color: #d3d3d3;
      }

      .filled {
        color: red;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
      }
    `,
  ],
})
export class RateHeart {
  @Input() rating!: number;

  ariaValueText(current: number, max: number) {
    return `${current} out of ${max} hearts`;
  }
}
