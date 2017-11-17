import {Component, OnInit} from "@angular/core";


import {UserService} from "../user/user.service";
import {User} from "../user/user";

@Component({

  selector: 'app-userlist',
  templateUrl:'./dashboard.component.html'
  // ,
  // styleUrls : ['./users.component.css']
,providers : [UserService]


})
export class DashboardComponent implements  OnInit {


  users: User[];

  constructor(private userService : UserService)
{


}

ngOnInit()
{

  this.userService.getUsers().then(res => this.users = res
  );


  componentData = null;

  createHelloWorldComponent(){
  this.componentData = {
    component: HelloWorldComponent,
    inputs: {
      showNum: 9
    }
  };
}

  createWorldHelloComponent(){
  this.componentData = {
    component: WorldHelloComponent,
    inputs: {
      showNum: 2
    }
  };
}

}

}
