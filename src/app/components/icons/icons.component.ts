import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
 @Input() noteId:any;

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    console.log(this.noteId);
  }

  delete(){
    console.log(this.noteId);
    let reqData = {
      noteIdList: [this.noteId.id],
      isDeleted: true, 
    }
    this.noteService.deletenotes(reqData).subscribe((response:any)=> {console.log(response);});
  }

  archive(){
    console.log(this.noteId);
    let reqData = {
      noteIdList: [this.noteId.id],
      isArchived: true, 
    }
    this.noteService.archivenotes(reqData).subscribe((response:any)=> {console.log(response);});
  }

}
