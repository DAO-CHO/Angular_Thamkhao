import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {AuthService} from 'src/app/services/auth.service'
import {ApiService} from '../../services/api.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password')}
  login(){ 
    let b = this.form.value 
    console.log(b) 
    this._api.postTypeRequest('/user/login/', b).subscribe((res: any) => { 
      console.log(res) 
      if(res.token){ 
        this._auth.setDataInLocalStorage('token', res.access_token) 
        this._auth.setDataInLocalStorage('userInfo', JSON.stringify(b))
        localStorage.setItem('token', JSON.stringify(res))
        this.router.navigate(['/home']).then(nav => {
          console.log(nav)
        }, err => {
          console.log(err)
        })
      } 
    }, err => { 
      console.log(err) 
    }); 
  }
  
}
