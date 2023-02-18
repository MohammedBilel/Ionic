import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListNewsService {
  tabNews = [
    {
      id : 1,
      text : "Here's a small text description for the card content.",
      title : "Mon premier news",
      image : 'https://www.actu-juridique.fr/app/uploads/2023/02/AdobeStock_361327476-1024x717.jpeg',
    },
    {
      id : 2,
      text : "Here's a small text description for the card content.",
      title : "Mon deuxiéme nwes",
      image : 'https://www.actu-juridique.fr/app/uploads/2023/02/AdobeStock_361327476-1024x717.jpeg',
    },
    {
      id : 3,
      text : "Here's a small text description for the card content.",
      title : "Mon troisieme news",
      image : 'https://www.actu-juridique.fr/app/uploads/2023/02/AdobeStock_361327476-1024x717.jpeg',
    },
    {
      id : 4,
      text : "Here's a small text description for the card content.",
      title : "Mon quatriéme news",
      image : 'https://www.actu-juridique.fr/app/uploads/2023/02/AdobeStock_361327476-1024x717.jpeg',
    },
  ];

  addNews(newNews){
    newNews.id = this.tabNews[this.tabNews.length -1].id + 1;
    this.tabNews.push(newNews);
  }

  getAllNews(){
    return this.tabNews;
  }

  constructor() { }
}
