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

  radioModel: string = 'Month';

  // lineChart1
  public lineChart1Data: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Series A'
    }
  ];
  public lineChart1Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 40 - 5,
          max: 84 + 5,
        }
      }],
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart1Colours: Array<any> = [
    {
      backgroundColor: getStyle('--primary'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart1Legend = false;
  public lineChart1Type = 'line';

  // lineChart2
  public lineChart2Data: Array<any> = [
    {
      data: [1, 18, 9, 17, 34, 22, 11],
      label: 'Series A'
    }
  ];
  public lineChart2Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart2Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 1 - 5,
          max: 34 + 5,
        }
      }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart2Colours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--info'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart2Legend = false;
  public lineChart2Type = 'line';


  // lineChart3
  public lineChart3Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'Series A'
    }
  ];
  public lineChart3Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart3Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart3Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
    }
  ];
  public lineChart3Legend = false;
  public lineChart3Type = 'line';


  // barChart1
  public barChart1Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
      label: 'Series A',
      barPercentage: 0.6,
    }
  ];
  public barChart1Labels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
  public barChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart1Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.3)',
      borderWidth: 0
    }
  ];
  public barChart1Legend = false;
  public barChart1Type = 'bar';

  // mainChart

  public mainChartElements = 27;
  public mainChartData1: Array<number> = [];
  public mainChartData2: Array<number> = [];
  public mainChartData3: Array<number> = [];

  public mainChartData: Array<any> = [
    {
      data: this.mainChartData1,
      label: 'Current'
    },
    {
      data: this.mainChartData2,
      label: 'Previous'
    },
    {
      data: this.mainChartData3,
      label: 'BEP'
    }
  ];
  /* tslint:disable:max-line-length */
  public mainChartLabels: Array<any> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  /* tslint:enable:max-line-length */
  public mainChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function(tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function(value: any) {
            return value.charAt(0);
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public mainChartColours: Array<any> = [
    { // brandInfo
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandSuccess
      backgroundColor: 'transparent',
      borderColor: getStyle('--success'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandDanger
      backgroundColor: 'transparent',
      borderColor: getStyle('--danger'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    }
  ];
  public mainChartLegend = false;
  public mainChartType = 'line';

  // social box charts

  public brandBoxChartData1: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Facebook'
    }
  ];
  public brandBoxChartData2: Array<any> = [
    {
      data: [1, 13, 9, 17, 34, 41, 38],
      label: 'Twitter'
    }
  ];
  public brandBoxChartData3: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'LinkedIn'
    }
  ];
  public brandBoxChartData4: Array<any> = [
    {
      data: [35, 23, 56, 22, 97, 23, 64],
      label: 'Google+'
    }
  ];

  public brandBoxChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public brandBoxChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false,
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public brandBoxChartColours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff'
    }
  ];
  public brandBoxChartLegend = false;
  public brandBoxChartType = 'line';

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  ngOnInit(): void {
    this.getCases();
    // generate random values for mainChart
    for (let i = 0; i <= this.mainChartElements; i++) {
      this.mainChartData1.push(this.random(50, 200));
      this.mainChartData2.push(this.random(80, 100));
      this.mainChartData3.push(65);
    }
  }

  cases: Case[] = [];
  updateFromInput = false;
  Highcharts = Highcharts;
  newcase = [];
  date = [];
  countryNames = [];
  countryCases = [];
  countryDeaths = [];
  dailycases = [];
  dailydeaths =[];
  sumOfcases = [];
  sumOfdeaths = [];
  chartOptions = {
     chart: {
        type: 'column'
     },
     title: {
        text: 'Corona New Cases column charts'
     },
     series: [],
     xAxis: {
        categories: []
     },
     exporting: {
        enabled: false
     },
     yAxis: {
        allowDecimals: false,
        title: {
           text: "New Cases"
        }
     }
  };
  chartOptions1 = {
     chart: {
        type: 'column'
     },
     title: {
        text: 'Corona Death Cases column charts'
     },
     series: [],
     xAxis: {
        categories: []
     },
     exporting: {
        enabled: false
     },
     yAxis: {
        allowDecimals: false,
        title: {
           text: "New Deaths"
        }
     }
  };
  chartOptions2 = {
     chart: {
        type: 'pie'
     },
     title: {
        text: 'Corona Total Cases Pie Charts'
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
     /*   if(!this.caseService.isUserLoggedIn()){
        this.router.navigate(['/login']); 
       } */
  }

  
  getCases(): void {
     this.caseService.getCases().subscribe(data => {
        this.cases = data;
        const totalcases = this.cases.reduce((accum, item) => accum + item.newCase, 0);
        const totaldeaths = this.cases.reduce((accum, item) => accum + item.newDeath, 0);
        /* const total=this.cases.reduce((p,c) => p+c.newCase,0); */
        console.log(totalcases);
        console.log(totaldeaths);

        this.date = [...new Set(this.cases.map(item => item.date))];
        const countryNames = [...new Set(this.cases.map(item => item.name))];
        this.countryDeaths = [];
        this.countryCases = [];
        this.dailycases =[];
        const dates = [... new Set(this.cases.map(item => item.date))];
        dates.forEach((e) => {
           const dcases = this.cases.filter(c => c.date == e);
           this.dailycases = [... this.dailycases,  dcases.reduce((accum, item) => accum + item.newCase, 0),
           ];
           this.dailydeaths = [ ... this.dailydeaths,  dcases.reduce((accum, item) => accum + item.newDeath, 0), ]
           console.warn(this.dailycases);
        });


        countryNames.forEach((el) => {
           const ccases = this.cases.filter(c => c.name == el);
           this.countryCases = [...this.countryCases, {
              data: ccases.map(d => d.newCase),
              name: el
           }];
           console.log(this.countryCases)
           this.countryDeaths = [...this.countryDeaths, {
              data: ccases.map(d => d.newDeath),
              name: el
           }];

           this.sumOfcases = [...this.sumOfcases, {
              name: el,
              y: ccases.reduce((accum, item) => accum + item.newCase, 0) / totalcases * 100
           }];

           this.sumOfdeaths = [...this.sumOfdeaths, {
              name: el,
              y: (ccases.reduce((accum, item) => accum + item.newDeath, 0) / totaldeaths) * 100
           }];


        });
        console.log(this.sumOfcases);
        console.log(this.sumOfdeaths);


        this.chartOptions.series = this.countryCases;
        this.chartOptions.xAxis.categories = this.date;

        this.chartOptions1.series = this.countryDeaths;
        this.chartOptions1.xAxis.categories = this.date;

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
         name:'Cases',
         data:this.dailycases    
      },
      {
         name:'Deaths',
         data:this.dailydeaths
      }
     
     
     ]
            this.chartOptions4.xAxis.categories = this.date;

        this.updateFromInput = true;
     });
  }

}
