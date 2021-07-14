import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {AuthService} from 'src/app/services/auth.service'
import {ApiService} from '../services/api.service'
import {AuthGuardService} from '../services/auth-guard.service'
import {Profile} from '../auth/profile'
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private router: Router,
    private _authservice: AuthGuardService,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }
  logout(){
    this._auth.getToken()
    this._api.getTypeRequest('/user/logout/').subscribe((res: any)=> {
      console.log(res)
      this.router.navigate(['/login'])
    })
  }
  sendemailconfirm(){
    let b = localStorage.getItem('userInfo')
    this._api.postTypeRequest('/api/auth/resend-confirm',b).subscribe((res)=>{
      console.log(res)})
      this.router.navigate(['/home'])
  }
  getProfile(){
    this._api.getTypeRequest('/api/auth/profile/').subscribe((res)=> {
      console.log(res)
      this._auth.setDataInLocalStorage('profile', JSON.stringify(res))
      this.router.navigate(['/profile'])
    }, err=> {console.log(err)})
  }
}
