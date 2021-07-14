import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Users } from './userK';
import { UserService } from '../user.service';
import { USERS} from '../users';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnChanges {
  @Input() color;
  @Input() status= '';
  selectedHero: Users;

  users: Users[];
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.userService.getUsers()
        .subscribe(users => this.users = users);
  }
  ngOnChanges(): void {
    console.log(this.color);
  }
}
