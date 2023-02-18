import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListNewsService } from '../list-news.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(private newsSer : ListNewsService, private router : Router) { }

  ngOnInit() {
  }

  // showForm(valueForm){
  //   console.log(valueForm);
  // }

  addNewNwes(valueForm){
    console.log(valueForm);
    this.newsSer.addNews(valueForm);
    this.router.navigateByUrl('/home');
    
  }
}
