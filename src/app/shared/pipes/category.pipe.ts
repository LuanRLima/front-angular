import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    let icon = '';
    switch (value) {
      case 'SANDALIA':
        icon = 'beach_access';
        break;
      case 'SAPATO':
        icon = 'directions_run';
        break;
      case 'TENIS':
        icon = 'sports';
        break;
      case 'BOTINA':
        icon = 'directions_walk';
        break;
      case 'CHINELO':
        icon = 'flip';
        break;
      default:
        icon = 'help';
    }
    return icon;
  }

}
