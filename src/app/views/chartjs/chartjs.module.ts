import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { ChartJSComponent } from './chartjs.component';
import { ChartJSRoutingModule } from './chartjs-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  imports: [
    ChartJSRoutingModule,
    ChartsModule,
    HighchartsChartModule
  ],
  declarations: [ ChartJSComponent ]
})
export class ChartJSModule { }
