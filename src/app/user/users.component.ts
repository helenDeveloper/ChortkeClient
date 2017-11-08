import {Component, OnInit} from "@angular/core";
import {UserService} from "./user.service";
import {User} from "./user";

@Component({

  selector: 'app-userlist',
  templateUrl:'./users.component.html'
  // ,
  // styleUrls : ['./users.component.css']
,providers : [UserService]


})
export class UsersComponent implements  OnInit {


  users: User[];

constructor(private userService : UserService)
{}

ngOnInit()
{

  this.userService.getUsers().then(res => this.users=res);


}


}
