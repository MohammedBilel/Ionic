import { Component, OnInit } from '@angular/core';
import { ListUsersService } from '../list-users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  tabU = [];
  constructor( private userTab : ListUsersService) { }

  ngOnInit() : void{
    this.tabU = this.userTab.getAllUsers();
  }

}
