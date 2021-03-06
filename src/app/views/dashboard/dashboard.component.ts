import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { Case } from '../../case';
import * as Highcharts from 'highcharts';
import { CaseService } from '../../case.service';
import { Router } from '@angular/router';
@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  countryNames = [];
  sumOfcases = [];
  sumOfdeaths = [];
  totalcases = 0;
  totaldeaths = 0;
  todaycases = [];
  todaydeaths = [];
  cases: Case[] = [];
  updateFromInput = false;
  Highcharts = Highcharts;
  date = [];
  dailycases = [];
  dailydeaths = [];

  chartOptions2 = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Corona Total Cases Pie Charts'
    },
    credits: {
      enabled: false
  },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        colors: [
          '#4dbd74',
          '#2f353a',
          '#20a8d8',
          '#ffc107',
          '#f86c6b'
        ],
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: []


  };
  chartOptions3 = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Corona Total Death Cases Pie Charts'
    },
    credits: {
      enabled: false
  },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        colors: [
          '#4dbd74',
          '#2f353a',
          '#20a8d8',
          '#ffc107',
          '#f86c6b'
        ],
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: []
  };
  chartOptions4 = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Daily Corona Cases'
    },
    credits: {
      enabled: false
  },
    subtitle: {
      text: '----'
    },
    xAxis: {
      categories: []
    },
    yAxis: {
      title: {
        text: 'Number Of Cases'
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false
      }
    },
    series: []
  };

  constructor(private caseService: CaseService, private router: Router) {
    if (!this.caseService.isUserLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this.getCases();
  }

  getCases(): void {
    this.caseService.getCases().subscribe(data => {
      this.cases = data;
      this.totalcases = this.cases.reduce((accum, item) => accum + item.newCase, 0);
      this.totaldeaths = this.cases.reduce((accum, item) => accum + item.newDeath, 0);

      this.date = [...new Set(this.cases.map(item => item.date))];
      this.date.forEach((e) => {
        const dcases = this.cases.filter(c => c.date == e);
        this.dailycases = [... this.dailycases, dcases.reduce((accum, item) => accum + item.newCase, 0),
        ];
        this.dailydeaths = [... this.dailydeaths, dcases.reduce((accum, item) => accum + item.newDeath, 0),];
      });

      this.todaycases = [...this.dailycases.slice(-1)[0]];
      this.todaydeaths = [...this.dailydeaths.slice(-1)[0]];



      const countryNames = [...new Set(this.cases.map(item => item.name))];
      countryNames.forEach((el) => {
        const ccases = this.cases.filter(c => c.name == el);
        this.sumOfcases = [...this.sumOfcases, {
          name: el,
          y: ccases.reduce((accum, item) => accum + item.newCase, 0) / this.totalcases * 100
        }];

        this.sumOfdeaths = [...this.sumOfdeaths, {
          name: el,
          y: (ccases.reduce((accum, item) => accum + item.newDeath, 0) / this.totaldeaths) * 100
        }];


      });

      this.chartOptions2.series = [{
        name: 'Cases',
        colorByPoint: true,
        data: this.sumOfcases
      }]

      this.chartOptions3.series = [{
        name: 'Deaths',
        colorByPoint: true,
        data: this.sumOfdeaths
      }]

      this.chartOptions4.series = [{
        name: 'Cases',
        data: this.dailycases
      },
      {
        name: 'Deaths',
        data: this.dailydeaths
      }]
      this.chartOptions4.xAxis.categories = this.date;

      this.updateFromInput = true;


    });
  }
}
