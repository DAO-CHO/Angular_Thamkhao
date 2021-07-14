import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { oktaJwtVerifier } from "@okta/jwt-verifier";
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {AuthService} from 'src/app/services/auth.service'
import {ApiService} from '../../services/api.service'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  form: FormGroup
  currentUser: any;
  Users: any;
  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private route: Router,
    private httpClient: HttpClient,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.Users = this._auth.getUserDetail()
    console.log(this.Users)
    this.form = this.fb.group({
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
    //console.log(this._auth.saveUser(this.Users))
    // this.form = this.fb.group({
    //   old_password: ['', Validators.required],
    //   new_password: ['', Validators.required],
    //   confirm_password: ['', Validators.required]
    // })
  }
  get old_password() {return this.form.get('old_password')}
  get new_password() {return this.form.get('new_password')}
  get confirm_password() {return this.form.get('confirm_password')}
  get first_name() { return this.form.get('first_name'); }
  get last_name() { return this.form.get('last_name')}
  get email() { return this.form.get('email')}
  get work_at() { return this.form.get('word_at')}
  get phone_number() { return this.form.get('phone_number')}
  get job() { return this.form.get('job')}
  get avatar() { return this.form.get('avatar')}
  get message() { return this.form.get('message')}
  get show_phone() { return this.form.get('show_phone')}
  change_password(){
    let b = this.form.value 
    console.log(b) 
    this._api.putTypeRequest('/api/auth/change_pass', b).subscribe((data) => {
      console.log(data)
      this.route.navigate(['/profile']).then(nav =>{
        console.log(nav)
      }, err =>{
        console.log(err)
      })
    }, err => {
      console.log(err)
    })
  }
  // getProfile(){
  //   this._api.getTypeRequest('/api/auth/profile/').subscribe((res: object)=> {
  //     console.log(res) 
  //     this._auth.setDataInLocalStorage('profile', JSON.stringify(res))
  //   }, err=> {console.log(err)})
  // }
  upProfile(){
    let c = this.form.value 
    console.log(c)
    this._api.putTypeRequest('/api/auth/profile/', c).subscribe((res:any)=>{
      console.log(res)
      this.route.navigate(['/profile'])
    }, err => {console.log(err)})
  }
}
