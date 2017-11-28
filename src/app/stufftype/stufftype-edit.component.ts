import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {StuffTypeEnum} from "../eums/stufftypeemum";
import {StuffType} from "./base/stufftype";
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';


@Component({
  selector : 'app-stufftype-edit',
  templateUrl : './stufftype-edit.component.html'

})

export class StuffTypeEditComponent implements OnInit
{

@Input() aStuffType : StuffType;

  @Output() saveOrUpdate = new EventEmitter<StuffType>();
  private subject = new Subject<any>();
selected = 'string';
  types = StuffTypeEnum;
keys:any[];

 public stuffTypeModel=new StuffType();


  constructor()
  {

    var allkeys = Object.keys(this.types);
    this.keys =allkeys.slice(allkeys.length / 2);
    this.subject.subscribe(mess => {

      alert('hi buddy!!!!');
      stuffTypeModel.

    });

  }

  ngOnInit()
  {}



  onSaveStuffType() : void {



    this.saveOrUpdate.emit({item : this.stuffTypeModel,su : this.subject});



  }
}
