import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort', pure: false
})
export class SortPipe implements PipeTransform {
  transform(array: any, value: any, isAsc: any) {
    console.log(isAsc);
    if (value) {
      if (isAsc) {
        return [...array.sort((a: any, b: any) => {
          if (parseInt(a[value]) && parseInt(b[value])) {
            return (a[value] > b[value]) ? 1 : ((b[value] > a[value]) ? -1 : 0)
          } else {
            return (a[value].toLowerCase() > b[value].toLowerCase()) ? 1 : ((b[value].toLowerCase() > a[value].toLowerCase()) ? -1 : 0)
          }
        })]
      } else {
        return [...array.sort((a: any, b: any) => {
          if (parseInt(a[value]) && parseInt(b[value])) {
            return (b[value] > a[value]) ? 1 : ((a[value] > b[value]) ? -1 : 0)
          } else {
            return (b[value].toLowerCase() > a[value].toLowerCase()) ? 1 : ((a[value].toLowerCase() > b[value].toLowerCase()) ? -1 : 0)
          }
        })]
      }
    } else return array
  }
}
