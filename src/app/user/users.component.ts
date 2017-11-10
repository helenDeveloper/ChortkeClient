import {Component, OnInit} from "@angular/core";
import {UserService} from "./user.service";
import {User} from "./user";
import {Response} from "@angular/http";

@Component({

  selector: 'app-userlist',
  templateUrl:'./users.component.html'
  // ,
  // styleUrls : ['./users.component.css']
,providers : [UserService]


})
export class UsersComponent implements  OnInit {


  users: User[];

  selectedUser: User;

  savedId : number;

constructor(private userService : UserService)
{

 this.selectedUser= new  User();

}

ngOnInit()
{

  this.userService.getUsers().then(res => this.users = res
  );




}

  onSelect(user :User) :void {

  this.selectedUser=user;

  }

  onSaveOrUpdate(event)
  {



    this.userService.saveOrUpdateUser(event).then(res => this.addToList(res,event));

  }
private  addToList(res: number,event)
{
  const user =new User();
  user.username=event.username;
  user.id= res;
  this.users.push(user);


}
}
