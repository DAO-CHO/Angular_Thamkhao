import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {AuthService} from 'src/app/services/auth.service'
import {ApiService} from '../../services/api.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    })
  }
  get first_name() { return this.form.get('first_name'); }
  get last_name() { return this.form.get('last_name')}
  get email() { return this.form.get('email')}
  get password() {return this.form.get('password')}
  get confirm_password() {return this.form.get('confirm_password')}
  register(){
    let b = this.form.value 
    console.log(b) 
    this._api.postTypeRequest('/api/auth/register/', b).subscribe((data) => {
      console.log(data)
      this.router.navigate(['/login']).then(nav =>{
        console.log(nav)
      }, err =>{
        console.log(err)
      })
    }, err => {
      console.log(err)
    })
  }
}
