import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  @Input() allnotes : any;
  title:any;
  description:any;

  constructor(public matDialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(note : any)
  {
    let dialogRef = this.matDialog.open(UpdateComponent, {
      width:'650px',
      data : note
    });
    dialogRef.afterClosed().subscribe(result=>{this.title;this.description;console.log(result)});
  }

}
