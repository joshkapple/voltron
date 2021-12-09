import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'degree'})
export class DegreePipe implements PipeTransform {
  transform(value: string): string {
    switch(value) {
      case 'bachelor':
        return "Bachelor's Degree";
        break;
      case 'associate':
        return "Associate's Degree";
        break;
      case 'certificate':
        return "Professional Certification";
        break;
      case 'doctorate':
        return "Doctoral Degree"
      default:
        return "N/A"
    }
  }
}
