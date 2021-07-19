import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort', pure: false
})
export class SortPipe implements PipeTransform {
  transform(array: any, value: any) {
    if (value.name) {
      if (value.asc) {
        return [...array.sort((a: any, b: any) => {
          if (parseInt(a[value.name]) && parseInt(b[value.name])) {
            return (a[value.name] > b[value.name]) ? 1 : ((b[value.name] > a[value.name]) ? -1 : 0)
          } else {
            return (a[value.name].toLowerCase() > b[value.name].toLowerCase()) ? 1 : ((b[value.name].toLowerCase() > a[value.name].toLowerCase()) ? -1 : 0)
          }
        })]
      } else {
        return [...array.sort((a: any, b: any) => {
          if (parseInt(a[value.name]) && parseInt(b[value.name])) {
            return (b[value.name] > a[value.name]) ? 1 : ((a[value.name] > b[value.name]) ? -1 : 0)
          } else {
            return (b[value.name].toLowerCase() > a[value.name].toLowerCase()) ? 1 : ((a[value.name].toLowerCase() > b[value.name].toLowerCase()) ? -1 : 0)
          }
        })]
      }
    } else return array
  }


}
