import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service'
import {ApiService} from '../services/api.service'
import {AuthGuardService} from '../services/auth-guard.service'
import {Router} from '@angular/router'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  Users: any;
  userinfo: any;
  form: FormGroup
  formup: FormGroup
  constructor(
    private _auth: AuthService,
    private _api: ApiService,
    private route: Router,
    private _authservice: AuthGuardService,
    public fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.getProfile()
    this.Users = this._auth.getUser()
    this.userinfo = JSON.parse( localStorage.getItem('userInfo'))
    console.log(this.Users)
    console.log(this.userinfo)
    //change password
    this.form = this.fb.group({
      old_password: ['', Validators.required],
      new_password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    })
    //upprofile
    this.formup = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      phone_number: [''],
      work_at: [''],
      job: [''],
      avatar: [''],
      message: [''],
      show_phone: ['']
    })
  }
  get old_password() {return this.form.get('old_password')}
  get new_password() {return this.form.get('new_password')}
  get confirm_password() {return this.form.get('confirm_password')}

  get first_name() { return this.formup.get('first_name'); }
  get last_name() { return this.formup.get('last_name')}
  get email() { return this.formup.get('email')}
  get work_at() { return this.formup.get('word_at')}
  get phone_number() { return this.formup.get('phone_number')}
  get job() { return this.formup.get('job')}
  get avatar() { return this.formup.get('avatar')}
  get message() { return this.formup.get('message')}
  get show_phone() { return this.formup.get('show_phone')}
  getProfile(){
    this._api.getTypeRequest('/api/auth/profile/').subscribe((res: Object)=> {
      console.log(res)
      this._auth.setDataInLocalStorage('profile', JSON.stringify(res))
    }, err=> {console.log(err)})
  }
  change_password(){
    let b = this.form.value 
    console.log(b) 
    this._api.putTypeRequest('/api/auth/change_pass', b).subscribe((data) => {
      console.log(data)
      this.route.navigate(['/home']).then(nav =>{
        console.log(nav)
      }, err =>{
        console.log(err)
      })
    }, err => {
      console.log(err)
    })
  }
  upProfile(){
    let c = this.form.value 
    console.log(c)
    this._api.putTypeRequest('/api/auth/profile/', c).subscribe((res:any)=>{
      console.log(res)
      this.route.navigate(['/home'])
    }, err => {console.log(err)})
  }
}
