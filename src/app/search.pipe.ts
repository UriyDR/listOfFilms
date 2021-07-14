import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(films: any, value: any) {
    return films.filter((film: any) => {
      return  film.name.toLowerCase().includes(value.toLowerCase())
    })

  }


}
