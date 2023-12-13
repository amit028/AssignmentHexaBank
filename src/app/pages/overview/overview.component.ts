import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/util/helper.service';
import * as ChartDataLabels from 'chartjs-plugin-datalabels';
import { ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { ApiService } from 'src/app/util/api.service';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  filter:any =[
    {name:'Weekly', id:1},
    {name:'Monthly', id:2},
    {name:'Yearly', id:3}
  ];
  ListRecordLimit = [5,10, 25, 50];
  currentPage: number = 1;
  PageRecordLimit: number = 5;
  ShowingStart: number = 1;
  ShowingEnd: number = 10;
  TotalRecords: number = 0;
  transactionsHistory:any=[];
  moneyStatistics:any={};
  balance:any={};
  showModalPopUp:boolean = false;
  selectedTran:any= {}
  public barChartLabels:any= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  constructor(public helperService : HelperService, private apiService :ApiService) { 
    this.helperService.ActivePageName = "Overview";
    this.getData();
  }

  ngOnInit(): void {
    
    (document.querySelector('.progress-bar') as HTMLElement).style.width = '50%';
    (document.querySelector('.progress-bar2') as HTMLElement).style.width = '70%';

  }
  
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40, 30, 22, 44, 61, 37],  backgroundColor: ['#91A7A7'], barPercentage: 0.7, borderRadius: 20, },
    { data: [28, 48, 40, 59, 86, 27, 90, 45, 68, 72, 64, 55],  backgroundColor: ['#8182AB'], barPercentage: 0.7, borderRadius: 20, },
    { data: [28, 48, 40, 59, 86, 27, 90, 32, 55, 71, 68, 49],  backgroundColor: ['#555D8C'], barPercentage: 0.7, borderRadius: 20, }
  ];

  public barChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      datalabels: {
        clamp: true,
        rotation: -90,
        font: {
          size: 12,
        },
        formatter: (value:any, context:any) => {
          const xLabel = context.chart.config.data.labels[context.dataIndex];
          const datasetLabel = context.dataset.label;
          return datasetLabel + ' - ' + xLabel + ' (' + Math.round(value) + ')';
        }
      },
      legend: {
        display: false
      }
    }
  };

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  getData(){
    this.apiService.getData('https://1.api.fy23ey06.careers.ifelsecloud.com/').subscribe((data:any)=>{
      this.transactionsHistory = data.transactions;
      this.moneyStatistics = data.money_statistics;
      this.balance = data.balance;
      (document.querySelector('.totalBalance') as HTMLElement).style.width = this.balance.payment_done_percentage +'%' ;
      console.log(this.moneyStatistics)
    },
    _Error => {
      this.apiService.HandleException(_Error);
    })
  }

  PageRecordLimitChanged(e: any) {
    this.ShowingEnd = e;
    this.ShowingStart = 1;
    this.currentPage = 1;
  }

  pageChange(e: any) {
    this.ShowingStart =
      e == 1 ? 1 : e * this.PageRecordLimit - this.PageRecordLimit + 1;
    this.ShowingEnd = e * this.PageRecordLimit;
    this.currentPage = e;
  }

  openModal(data:any){
    this.helperService.openModal('tableModal');
    this.selectedTran = data;
  }

  closeModal(){
    this.selectedTran = {}
    this.helperService.closeModal('tableModal')
  }
}
