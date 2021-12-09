import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'tuition'})
export class TuitionPipe implements PipeTransform {
  transform(value: number): string {
    return `\$${value},000`;
  }
}
