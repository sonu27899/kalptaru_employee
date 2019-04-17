import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cashierhomepage',
  templateUrl: './cashierhomepage.component.html',
  styleUrls: ['./cashierhomepage.component.css']
})
export class CashierhomepageComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,public _router:Router) {}

  onprofile()
  {
    this._router.navigate(['CashierHomepage/myprofile',localStorage.getItem('email')])
  }
  onlogout()
  {
    localStorage.setItem('email',"");
    localStorage.setItem('designation',"");
    this._router.navigate(['']);
  }
}
