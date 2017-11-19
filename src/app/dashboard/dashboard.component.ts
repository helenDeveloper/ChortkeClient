import {Component, OnInit} from "@angular/core";


import {UserService} from "../user/user.service";
import {User} from "../user/user";
import {tempDatas} from "../dynamicforms/tempd";

@Component({

  selector: 'app-userlist',
  templateUrl:'./dashboard.component.html'
  // ,
  // styleUrls : ['./users.component.css']
,providers : [UserService]


})
export class DashboardComponent implements  OnInit {


  users: User[];
itemsStuffs :any[];
  constructor(private userService : UserService)
{

this.itemsStuffs = tempDatas;
}

ngOnInit()
{

  this.userService.getUsers().then(res => this.users = res);



}

}
