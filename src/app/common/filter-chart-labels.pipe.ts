import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BgReading } from '../models/BgReading';

@Pipe({
  name: 'filterChartLabels'
})
export class FilterChartLabelsPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}

  transform(labels: string[], bgReadings: BgReading[], day: any): any {
    let filteredLabels = [];
    bgReadings.forEach(bg => {
      if(day == '' || day == 'Select all' || day == this.datePipe.transform(bg.bgDate, 'MM/dd/yyyy')) {
        filteredLabels.push(bg.bgDate);
      }
    });
    return filteredLabels;
  }

}
