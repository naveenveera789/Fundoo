import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any;

  constructor(private httpService : HttpService) {
    this.token = localStorage.getItem("token");
   }

   takenotes(data: any)
   {
     let headersObject = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Authorization': this.token
       })
     }
     console.log("take-notes called in service notes",data);
     return this.httpService.postService('/notes/addNotes',data,true,headersObject)
   }

   getallnotes()
   {
    this.token = localStorage.getItem("token");
    let headersObject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    console.log("get-all-notes called in service notes",this.token);
    return this.httpService.getService('/notes/getNotesList',true,headersObject)
   }

   deletenotes(data:any)
   {
    let headersObject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    console.log("delete notes called in service notes");
    return this.httpService.postService('/notes/trashNotes',data,true,headersObject)
   }

   archivenotes(data:any)
   {
    let headersObject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    console.log("archive notes called in service notes");
    return this.httpService.postService('/notes/archiveNotes',data,true,headersObject)
   }


   updatenotes(data:any)
   {
    let headersObject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    console.log("update notes called in service notes");
    return this.httpService.postService('/notes/updateNotes',data,true,headersObject)
   }

   archiveNotesList()
   {
    this.token = localStorage.getItem("token");
    let headersObject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    console.log("archive notes list called in service notes");
    return this.httpService.getService('/notes/getArchiveNotesList',true,headersObject)
   }

   trashNotesList()
   {
    this.token = localStorage.getItem("token");
    let headersObject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    console.log("trash notes list called in service notes");
    return this.httpService.getService('/notes/getTrashNotesList',true,headersObject)
   }

   deleteNotesPermanently(data:any){
    let headersObject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    console.log("delete notes permanently called in service notes");
    return this.httpService.postService('/notes/deleteForeverNotes',data,true,headersObject)
   }

   colorpalette(data:any){   
    let headersObject= {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    console.log("color palette notes called in service notes");
    return this.httpService.postService('/notes/changesColorNotes',data,true,headersObject)
   }
}
