import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {

  transform(number: number = 0): string {
    const abs: number = Math.abs(number);
    let resultNumber: any;

    if (abs < Math.pow(10, 12) && abs >= Math.pow(10, 8)) {
      // billion
      resultNumber = parseFloat((number / Math.pow(10, 9)).toFixed(2)) + 'B';
    } else if (abs < Math.pow(10, 9) && abs >= Math.pow(10, 5)) {
      // million
      resultNumber = parseFloat((number / Math.pow(10, 6)).toFixed(2)) + 'M';
    } else if (abs < Math.pow(10, 6) && abs >= 1000) {
      // thousand
      resultNumber = parseFloat((number / Math.pow(10, 3)).toFixed(1)) + 'K';
    } else {
      // less than a 1000
      resultNumber = number.toString();
    }

    return resultNumber;
  }

}
