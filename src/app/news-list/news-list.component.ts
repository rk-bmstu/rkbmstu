import { Component, OnInit } from '@angular/core';

import { Novelty, NewsService } from '../news.service';

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  news : Novelty[];

  constructor(private newsService : NewsService) { }

  ngOnInit() {
    this.news = this.newsService.getNews();
  }

  mmm(url : string) {
    return "url("+url+")";
  }
}
