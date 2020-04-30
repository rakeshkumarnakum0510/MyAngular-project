import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CaseService } from '../../case.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 
  username: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;


  constructor(
    private router: Router,
    private caseService: CaseService) {   }


  handleLogin() {
    this.caseService.caseService(this.username, this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/base/tables']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });      
  }
}
