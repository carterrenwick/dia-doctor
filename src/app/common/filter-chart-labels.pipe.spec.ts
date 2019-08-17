import { FilterChartLabelsPipe } from './filter-chart-labels.pipe';
import { DatePipe } from '@angular/common';

describe('FilterChartLabelsPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterChartLabelsPipe(new DatePipe('en'));
    expect(pipe).toBeTruthy();
  });
});
