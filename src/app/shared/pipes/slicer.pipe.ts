import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicer',
})
export class SlicerPipe implements PipeTransform {
  transform(value: string, start: number, end: number): string {
    if (value.length < 100) {
      return value;
    }
    return value.slice(start, end) + ' .... ';
  }
}
