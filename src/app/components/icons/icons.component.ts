import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/services/noteService/note.service';
import { GetAllArchiveNotesComponent } from '../get-all-archive-notes/get-all-archive-notes.component';
import { GetAllTrashNotesComponent } from '../get-all-trash-notes/get-all-trash-notes.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
 @Output() changeColorOfNote = new EventEmitter<any>();
 @Input() noteId:any;
 isShowIconsForTrash: boolean=false;
 isShowIconsForArchive: boolean=false;

 colors=['#ffffff','#e57373 ','#fbbc04','#fff475','#ccff90','#a7ffeb','#cbf0f8','#aecbfa','#d7aefb','#fdcfe8','#e6c9a8','#e8eaed'];

  constructor(private noteService:NoteService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    let icon = this.route.snapshot.component;
    if(icon == GetAllTrashNotesComponent){
      this.isShowIconsForTrash = true;
      console.log(this.isShowIconsForTrash);
    }
    if(icon == GetAllArchiveNotesComponent){
      this.isShowIconsForArchive = true;
      console.log(this.isShowIconsForArchive);
    }
    console.log(this.noteId);
  }

  delete(){
    console.log(this.noteId);
    let reqData = {
      noteIdList: [this.noteId.id],
      isDeleted: true, 
    }
    this.noteService.deletenotes(reqData).subscribe((response:any)=> {console.log(response);this.changeColorOfNote.emit(response)});
  }

  archive(){
    console.log(this.noteId);
    let reqData = {
      noteIdList: [this.noteId.id],
      isArchived: true, 
    }
    this.noteService.archivenotes(reqData).subscribe((response:any)=> {console.log(response);this.changeColorOfNote.emit(response)});
  }

  unarchive(){
    console.log(this.noteId);
    let reqData = {
      noteIdList: [this.noteId.id],
      isArchived: false, 
    }
    this.noteService.archivenotes(reqData).subscribe((response:any)=> {console.log(response);this.changeColorOfNote.emit("hello")});
  }

  deletePermanently(){
    console.log(this.noteId);
    let reqData = {
      noteIdList: [this.noteId.id],
      isDeleted: true, 
    }
    this.noteService.deleteNotesPermanently(reqData).subscribe((response:any)=> {console.log(response);this.changeColorOfNote.emit(response)});
  }

  restoreNotes(){
    console.log(this.noteId);
    let reqData = {
      noteIdList: [this.noteId.id],
      isDeleted: false, 
    }
    this.noteService.deletenotes(reqData).subscribe((response:any)=> {console.log(response);this.changeColorOfNote.emit(response)});
  }

  changeColor(color:any){
    this.noteId.color = color;
    let reqData = {
      noteIdList: [this.noteId.id],
      color: color
    }
    this.noteService.colorpalette(reqData).subscribe((response:any)=> {console.log(response);this.changeColorOfNote.emit(color)});
  }

}
