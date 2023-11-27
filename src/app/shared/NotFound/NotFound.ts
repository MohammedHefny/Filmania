import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-NotFound',
  standalone: true,
  imports: [],
  template: `<div class="out">
    <div>
      <h2 class="w-100">404 ERROR</h2>
      <h3 class="w-100">Page Is Not Found</h3>
    </div>
  </div> `,
  styles: [
    `
      .out {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 20px;
        background-color: var(--main-color);
        color: white;
      }
    `,
  ],
})
export class NotFoundComponent {}
