import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit, OnChanges {
  @Input() keyName
  @Input() lable=''
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    console.log(this.keyName)
  }
}
