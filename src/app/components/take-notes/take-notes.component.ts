import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-take-notes',
  templateUrl: './take-notes.component.html',
  styleUrls: ['./take-notes.component.scss']
})
export class TakeNotesComponent implements OnInit {

  title:any;
  description:any;
  isExpanded = false;

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
  }

  mainbox()
  {
    return this.isExpanded === true ? (this.isExpanded = false) : (this.isExpanded = true);
  }

  create() {
    let reqData={
      title:this.title,
      description:this.description
    }
    console.log(reqData);
    if(this.title && this.description)
    {
      this.noteService.takenotes(reqData).subscribe((response:any) => {
        console.log(response);
        localStorage.setItem("token",response.id);
        this.title='';
        this.description=''
      },
       error => {console.log(error);})
    }
    else{
      console.log("Enter the Fields");
    }
  }

}
