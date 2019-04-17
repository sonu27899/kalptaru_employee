import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-worker-homepage',
  templateUrl: './worker-homepage.component.html',
  styleUrls: ['./worker-homepage.component.css']
})
export class WorkerHomepageComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    onlogout()
    {
      localStorage.setItem('email',"");
      localStorage.setItem('designation',"");
      this._router.navigate(['']);
    }
    onprofile()
  {
    this._router.navigate(['WorkerHomepage/myprofile',localStorage.getItem('email')])
  }

  constructor(private breakpointObserver: BreakpointObserver,private _router:Router) {}

}
