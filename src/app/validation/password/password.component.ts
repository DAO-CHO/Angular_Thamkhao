import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit, OnChanges {
  @Input() keyPassword
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void{
    console.log(this.keyPassword)
  }

}
