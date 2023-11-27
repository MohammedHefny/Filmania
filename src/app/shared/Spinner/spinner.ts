import { Component, Input } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-Spinner',
  standalone: true,
  imports: [NgbRatingModule, BrowserModule],
  template: `<div class="loadingio-spinner-bean-eater-bwjf9rdbsd">
    <div class="ldio-3ejp2vct52d">
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div> `,
  styles: [
    `
      @keyframes ldio-3ejp2vct52d-1 {
        0% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(-45deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
      @keyframes ldio-3ejp2vct52d-2 {
        0% {
          transform: rotate(180deg);
        }
        50% {
          transform: rotate(225deg);
        }
        100% {
          transform: rotate(180deg);
        }
      }
      .ldio-3ejp2vct52d > div:nth-child(2) {
        transform: translate(-15px, 0);
      }
      .ldio-3ejp2vct52d > div:nth-child(2) div {
        position: absolute;
        top: 40.8px;
        left: 40.8px;
        width: 122.4px;
        height: 61.2px;
        border-radius: 122.4px 122.4px 0 0;
        background: #aa1212;
        animation: ldio-3ejp2vct52d-1 1.075268817204301s linear infinite;
        transform-origin: 61.2px 61.2px;
      }
      .ldio-3ejp2vct52d > div:nth-child(2) div:nth-child(2) {
        animation: ldio-3ejp2vct52d-2 1.075268817204301s linear infinite;
      }
      .ldio-3ejp2vct52d > div:nth-child(2) div:nth-child(3) {
        transform: rotate(-90deg);
        animation: none;
      }
      @keyframes ldio-3ejp2vct52d-3 {
        0% {
          transform: translate(193.8px, 0);
          opacity: 0;
        }
        20% {
          opacity: 1;
        }
        100% {
          transform: translate(71.4px, 0);
          opacity: 1;
        }
      }
      .ldio-3ejp2vct52d > div:nth-child(1) {
        display: block;
      }
      .ldio-3ejp2vct52d > div:nth-child(1) div {
        position: absolute;
        top: 93.84px;
        left: -8.16px;
        width: 16.32px;
        height: 16.32px;
        border-radius: 50%;
        background: #c34c37;
        animation: ldio-3ejp2vct52d-3 1.075268817204301s linear infinite;
      }
      .ldio-3ejp2vct52d > div:nth-child(1) div:nth-child(1) {
        animation-delay: -0.6231000000000001s;
      }
      .ldio-3ejp2vct52d > div:nth-child(1) div:nth-child(2) {
        animation-delay: -0.3069s;
      }
      .ldio-3ejp2vct52d > div:nth-child(1) div:nth-child(3) {
        animation-delay: 0s;
      }
      .loadingio-spinner-bean-eater-bwjf9rdbsd {
        width: 204px;
        height: 204px;
        display: block;
        overflow: hidden;
        // background: #f1f2f3;
        background: #ffff;
        margin: 0 auto;
      }
      .ldio-3ejp2vct52d {
        width: 100%;
        height: 100%;
        position: relative;
        transform: translateZ(0) scale(1);
        backface-visibility: hidden;
        transform-origin: 0 0; /* see note above */
      }
      .ldio-3ejp2vct52d div {
        box-sizing: content-box;
      }
    `,
  ],
})
export class SpinnerComponent {}
