import { Component, OnInit } from '@angular/core';
import { HeaderComponent} from '../header/header.component'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {AuthService} from 'src/app/services/auth.service'
import {ApiService} from '../services/api.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: any;
  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private router: Router,
    public fb: FormBuilder
  ) { }
  headercomponent: HeaderComponent
  ngOnInit(): void {
    this.currentUser = this._auth.getUser()
  }
  logout(){
    this._auth.getToken()
    this._api.getTypeRequest('/user/logout/').subscribe((res: any)=> {
      console.log(res)
      this.router.navigate(['/login'])
    })
  }
}
