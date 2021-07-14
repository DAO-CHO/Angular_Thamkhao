import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {map} from 'rxjs/operators'
import {AuthService} from 'src/app/services/auth.service'
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private REST_API_SERVER = "https://seekproduct-api.misavu.net"
  constructor(private httpClient: HttpClient, private _auth: AuthService) { }
  
  getTypeRequest(url){
    let token = localStorage.getItem('token');
    let parsedToken = JSON.parse(token).token;
    return this.httpClient.get(this.REST_API_SERVER+url, {headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: `Bearer ${parsedToken}`})}).pipe(map(res=>{return res}))
  }
  getidTypeRequest(url){
    let token = localStorage.getItem('token');
    let parsedToken = JSON.parse(token).token;
    return this.httpClient.get(this.REST_API_SERVER+url, {headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: `Bearer ${parsedToken}`})}).pipe(map(res=>{return res})) 
  }
  postTypeRequest(url, payload){
    return this.httpClient.post(this.REST_API_SERVER+url, payload).pipe(map(res=>{return res}))
  }
  putTypeRequest(url, payload){
     let token = localStorage.getItem('token');
     let parsedToken = JSON.parse(token).token;
     console.log(parsedToken);
    return this.httpClient.put(this.REST_API_SERVER+url, payload, {headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: `Bearer ${parsedToken}` })}).pipe(map(res=>{return res}))
  }
}
