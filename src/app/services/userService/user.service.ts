import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any
  constructor(private httpService:HttpService) { 
    this.token = localStorage.getItem("token");
  }

  signup(data: any)
  {
    let headersObject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log("signup called in service user",data);
    return this.httpService.postService('/user/userSignUp',data,false,headersObject)
  }

  login(data: any)
  {
      let headersObject = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
      console.log("login called in service user",data);
      return this.httpService.postService('/user/login',data,false,headersObject)
  }

  forgotpassword(data:any)
  {
    let headersObject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log("forgot password called in service user");
    return this.httpService.postService('/user/reset',data,false,headersObject)
  }

  resetpassword(data:any, token:any)
  {
    let headersObject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    }
    console.log("reset password called in service user");
    return this.httpService.postService('/user/reset-password',data,true,headersObject)
  }
}