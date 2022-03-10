import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  @Output() updateNoteToRefresh = new EventEmitter<any>();
  title:any;
  description:any;
  noteId:any;
  constructor(private noteService: NoteService,public matDialogRef : MatDialogRef<UpdateComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    console.log(this.data);
    this.title=this.data.title;
    this.description=this.data.description;
  }

  update()
  {
    let reqData = {
      noteId : this.data.id,
      title : this.title,
      description : this.description
    }
    this.noteService.updatenotes(reqData).subscribe((response:any)=>{console.log(response);});
    this.matDialogRef.close();
  }

}
