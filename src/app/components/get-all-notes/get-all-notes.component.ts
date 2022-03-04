import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})

export class GetAllNotesComponent implements OnInit {

  token:any;
  notesarray:[];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getallnotes()
  }

  getallnotes()
  {
    this.noteService.getallnotes('notes').subscribe((response:any)=>{console.log(response);
      let notesarr= response.data.data;
      notesarr.reverse();
      console.log(notesarr);
      this.notesarray=notesarr;
      console.log(this.notesarray)})
  }
  
}
