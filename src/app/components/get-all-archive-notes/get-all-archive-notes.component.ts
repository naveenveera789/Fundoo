import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-get-all-archive-notes',
  templateUrl: './get-all-archive-notes.component.html',
  styleUrls: ['./get-all-archive-notes.component.scss']
})
export class GetAllArchiveNotesComponent implements OnInit {
  archiveNotes:any;

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.getAllArchiveNotes();
  }

  getAllArchiveNotes()
  {
    this.noteService.archiveNotesList().subscribe((response:any)=>{
      this.archiveNotes = response.data.data;
      console.log(this.archiveNotes);
      },error=>{console.log(error);});
  }

}
