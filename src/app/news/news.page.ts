import { Component, OnInit } from '@angular/core';
import { ListNewsService } from '../list-news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  tab = [];

  constructor(private tabNews : ListNewsService) {
   
   }

  ngOnInit(): void {
    this.tab = this.tabNews.getAllNews();
  }

}
