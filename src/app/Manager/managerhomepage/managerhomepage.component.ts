import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managerhomepage',
  templateUrl: './managerhomepage.component.html',
  styleUrls: ['./managerhomepage.component.css']
})
export class ManagerhomepageComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    onprofile()
  {
    this._router.navigate(['ManagerHomepage/myprofile',localStorage.getItem('email')])
  }
  onlogout()
  {
    localStorage.setItem('email',"");
    localStorage.setItem('designation',"");
    this._router.navigate(['']);
  }

  constructor(private breakpointObserver: BreakpointObserver,private _router:Router) {}

}
