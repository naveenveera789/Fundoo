import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  isExpanded=false;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  notes()
  {
    this.router.navigate(['/dashboard/notes']);
  }

  archive()
  {
    this.router.navigate(['/dashboard/archiveNotes']);
  }

  trash()
  {
    this.router.navigate(['/dashboard/trashNotes']);
  }

  refresh(){
    window.location.reload();
  }

  LogOut()
  {
     localStorage.removeItem("token");
     this.router.navigate(["/login"])
  }

}
