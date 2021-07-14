import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit, OnChanges {
  @Input() keyEmail
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void{
    console.log(this.keyEmail)
  }

}
