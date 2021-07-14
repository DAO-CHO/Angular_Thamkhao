import { Component, OnChanges, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-color',
  templateUrl: './status-color.component.html',
  styleUrls: ['./status-color.component.css']
})
export class StatusColorComponent implements OnInit, OnChanges {
  @Input() status;
  @Input() color='';
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
  console.log(this.status);
  }
}
