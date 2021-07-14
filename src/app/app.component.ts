import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  @Input('keyName') keyName;
  @Input() lable = '';
  title = 'Temp';
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    console.log(this.keyName);
  }
}
