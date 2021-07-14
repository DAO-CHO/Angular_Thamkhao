import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css']
})
export class ConfirmPasswordComponent implements OnInit, OnChanges {
  @Input() keyConfirmpassword;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    console.log(this.keyConfirmpassword)
  }
}
