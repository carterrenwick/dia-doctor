import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { BgService } from 'src/app/services/bg.service';
import { BgReading } from 'src/app/models/BgReading';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chart-test',
  templateUrl: './chart-test.component.html',
  styleUrls: ['./chart-test.component.css']
})
export class ChartTestComponent implements OnInit {
  bgReadings: BgReading[];
  bgDays: string[];
  selectedDay: any;

  public lineChartData: ChartDataSets[] = [{data: [], label: 'BG Values'}];
  public lineChartLabels: string[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      yAxes: [{
          ticks: {
              suggestedMin: 0,
              suggestedMax: 400
          }
      }]
  }
  };

  constructor(private bgService: BgService, private datePipe: DatePipe) {
    this.bgReadings = [];
    this.bgDays = [];
    this.selectedDay = '';
   }

  ngOnInit() {
    this.bgService.getBgReadings().subscribe(data => {
      this.bgReadings = data;

      data.forEach(bg => {
        this.lineChartData[0].data.push(parseInt(bg.bgValue));
        this.lineChartLabels.push(bg.bgDate);

        let bgDay = this.datePipe.transform(bg.bgDate, 'MM/dd/yyyy');
        if(!this.bgDays.includes(bgDay)) {
          this.bgDays.push(bgDay);
        }
      })
    });
  }

}
