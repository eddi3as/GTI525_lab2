import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {
  @Input()
  fontaine!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
