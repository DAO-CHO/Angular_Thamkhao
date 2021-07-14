import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userProfile: any;
  constructor() { }
  getUserDetail(){
    return localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')): null
  }
  setDataInLocalStorage(variableName, data){
    localStorage.setItem(variableName, data)
  }
  getToken(){
    return localStorage.getItem('token')
  }
  clearStorage(){
    localStorage.clear()
  }
  saveUser() {
    return localStorage.getItem('profile');
  }
  getUser() {
    return JSON.parse(localStorage.getItem('profile'));
  }
}
