import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Output() changeColorOfNote = new EventEmitter<any>();
  @Output() updateNoteToRefresh = new EventEmitter<any>();
  @Input() allnotes : any;
  title:any;
  description:any;
  searchWord : any;

  constructor(public matDialog:MatDialog, private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.receivedData.subscribe((response:any)=>{console.log(response);this.searchWord=response})
  }

  openDialog(note : any)
  {
    let dialogRef = this.matDialog.open(UpdateComponent, {
      width:'650px',
      data : note
    });
    dialogRef.afterClosed().subscribe(result=>{this.title;this.description;console.log(result);this.updateNoteToRefresh.emit(result)});
  }

  transferFromNotes(e:any){
      console.log(e);
      this.changeColorOfNote.emit(e)
  }

}
