import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Novelty, NewsService } from '../news.service';

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  news : Novelty[];

  newsService : NewsService = new NewsService();

  constructor() { }

  ngOnInit() {
    this.news = this.newsService.getNews();
  }
}
