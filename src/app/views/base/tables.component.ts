import { Component, OnInit } from '@angular/core';
import { CaseService } from '../../case.service';
import { Case } from '../../case';

@Component({
  templateUrl: 'tables.component.html'
})
export class TablesComponent implements OnInit{
  cases: Case[] = [];
  todayCases=[];
  constructor(private caseService: CaseService) { }

  ngOnInit(): void {
    this.getCases();
  }
  getCases(): void {
   let todaydate = new Date().toISOString().split('T')[0]; 
    let td = JSON.stringify(todaydate); 
    this.caseService.getCases().subscribe(data => { 
      this.cases = data ;
      this.todayCases=this.cases.filter( a => a.date == JSON.parse(td));
       console.log(this.todayCases);
      this.todayCases.forEach((el)=>{
         const ccases = this.cases.filter(c => c.name == el.name);
             const sumOfcases =ccases.reduce((accum,item) => accum + item.newCase, 0);
             const sumOfdeaths =ccases.reduce((accum,item) => accum + item.newDeath, 0);
          el.totalCases= sumOfcases;
          el.totalDeaths = sumOfdeaths;
        console.log(sumOfcases);
        console.log(sumOfdeaths);
      }); 
    });
     
  }
  deleteCase(id) {
    this.caseService.deleteCase(id).subscribe(data => {
      this.getCases();
    });
  }
    
  

}
