import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { CaseService } from '../../case.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  
  constructor(private caseService: CaseService,private router: Router,) {
    if(!this.caseService.isUserLoggedIn()){
      this.router.navigate(['/login']); 
     }
   }
  ngOnInit() {
  
  }
  handleLogout() {
    this.caseService.logout();
    this.router.navigate(['/login']);
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
