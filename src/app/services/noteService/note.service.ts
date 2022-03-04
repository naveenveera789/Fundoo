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

   getallnotes(url:any)
   {
     console.log("Data is ", url);
     return this.httpService.getService('/notes/getNotesList');
   }

}
