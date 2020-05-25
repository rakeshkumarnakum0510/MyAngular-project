import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CaseService } from '../../case.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'forms.component.html'
})

export class FormsComponent implements OnInit {
  caseFormGroup: FormGroup;
  countries =[];
  
  constructor(private caseService: CaseService, private router: Router) { }

  ngOnInit() {
    this.getCountries();
    this.caseFormGroup = new FormGroup({
      name: new FormControl(""),
      date: new FormControl(""),
      newCase: new FormControl(""),
      newDeath: new FormControl("")
    });
  }
  addCase() {
    this.caseService.addCase(this.caseFormGroup.value).subscribe(data => {
      this.router.navigate(["base/tables"]);
    });
  }
 getCountries(){
   this.countries=this.caseService.getCountries();
 }
}
/* 
  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }
 */

