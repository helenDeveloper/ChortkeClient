
import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {User} from "../user";
@Component({

    selector: 'app-user-detail',
    templateUrl:'./user-detail.component.html'
      }

)
export class UserDetailComponent implements OnInit
{

@Output() saveOrUpdate = new EventEmitter<User>();

@Input() user: User;

constructor() {}
ngOnInit()
{}

  onSaveChanges()
  {

this.saveOrUpdate.emit(this.user);

  }


}
