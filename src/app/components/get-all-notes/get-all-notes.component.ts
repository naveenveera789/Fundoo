import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})

export class GetAllNotesComponent implements OnInit {

  token:any;
  notesarray:any;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getallnotes()
  }

  getallnotes()
  {
    this.noteService.getallnotes().subscribe((response:any)=>{
    this.notesarray=response.data.data;
    console.log(this.notesarray);
    },error=>{console.log(error)});
  }
  
}
