import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  isExpanded=false;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router, private dataService:DataService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  search(event:any){
    console.log(event.target.value);
    this.dataService.sendData(event.target.value);
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
