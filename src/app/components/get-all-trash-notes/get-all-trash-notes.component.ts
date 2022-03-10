import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-get-all-trash-notes',
  templateUrl: './get-all-trash-notes.component.html',
  styleUrls: ['./get-all-trash-notes.component.scss']
})
export class GetAllTrashNotesComponent implements OnInit {
  trashNotes:any;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getAllTrashNotes();
  }

  getAllTrashNotes()
  {
    this.noteService.trashNotesList().subscribe((response:any)=>{
      this.trashNotes = response.data.data;
      console.log(this.trashNotes);
      },error=>{console.log(error);});
  }

  trash(e:any){
    this.getAllTrashNotes();
  }

}
