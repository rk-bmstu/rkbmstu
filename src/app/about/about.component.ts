import { Component, OnInit } from '@angular/core';

import { NewsService } from '../news.service';

import { Globals } from '../globals';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  globals : Globals = new Globals();
  newsService : NewsService = new NewsService();

  ngOnInit() {
  }

  newsCount : number;

}
