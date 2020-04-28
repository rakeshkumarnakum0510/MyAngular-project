import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { CaseService } from '../../case.service';
import { Case } from '../../case';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  caseFormGroup: FormGroup;
  countries = [];
  case: Case;
  constructor(
    private route: ActivatedRoute,
    private caseService: CaseService,
    private router: Router,
  ) { }

  ngOnInit() {

    this.caseFormGroup = new FormGroup(
      {
        name: new FormControl(''),
        date: new FormControl(''),
        newCase: new FormControl(''),
        newDeath: new FormControl('')
       
      },
    );

    this.getCountries();
    this.getCase();
  }
  getCase(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.caseService.getCase(id)
      .subscribe(cas => {
        this.case = cas;
        console.log(this.case);
        this.caseFormGroup.patchValue(this.case);
        
      });
  }


  editCase() {

    this.case.name = this.caseFormGroup.value.name;
    this.case.date = this.caseFormGroup.value.date;
    this.case.newCase = this.caseFormGroup.value.newCase;
    this.case.newDeath = this.caseFormGroup.value.newDeath;
    this.caseService.editCase(this.case.id, this.case).subscribe(data => {
      this.router.navigate(["base/tables"]);
    });
  }

  getCountries(): void {
    this.countries = this.caseService.getCountries();
  }
}
