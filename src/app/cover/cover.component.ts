import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  constructor() { }

  @Input() title : string;

  ngOnInit() {
  }

}
