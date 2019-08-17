import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BgReading } from '../models/BgReading';

@Pipe({
  name: 'filterChartData'
})
export class FilterChartDataPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}

  transform(lineChartData: any, bgReadings: BgReading[], day: any): any {
    let filteredBgs = [{data: [], label: 'BG Values'}];
    bgReadings.forEach(bg => {
      if(day == '' || day == 'Select all' || day == this.datePipe.transform(bg.bgDate, 'MM/dd/yyyy')) {
        filteredBgs[0].data.push(parseInt(bg.bgValue));
      }
    });
    return filteredBgs;
  }

}
