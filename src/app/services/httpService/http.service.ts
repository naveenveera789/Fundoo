import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BaseUrl = environment.BaseUrl;
  token:any;

  constructor(private http: HttpClient) { }

  postService(url: string, reqData: any, token: boolean=false, httpOptions: any={})
  {
    return this.http.post(this.BaseUrl + url, reqData, token && httpOptions);
  }

  getService(url: string, httpOptions: any={})
  {
    return this.http.get(this.BaseUrl + url, httpOptions);
  }

  putService()
  {

  }

  deleteService()
  {

  }
}
