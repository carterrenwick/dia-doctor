import { FilterChartDataPipe } from './filter-chart-data.pipe';
import { DatePipe } from '@angular/common';

describe('FilterChartDataPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterChartDataPipe(new DatePipe('en'));
    expect(pipe).toBeTruthy();
  });
});
