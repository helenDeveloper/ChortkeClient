import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {StuffTypeEnum} from "../eums/stufftypeemum";
import {StuffType} from "./base/stufftype";


@Component({
  selector : 'app-stufftype-edit',
  templateUrl : './stufftype-edit.component.html'

})

export class StuffTypeEditComponent implements OnInit
{

@Input() aStuffType : StuffType;

  @Output() saveOrUpdate = new EventEmitter<StuffType>();

selected = 'string';
  types = StuffTypeEnum;
keys:any[];

 public stuffTypeModel=new StuffType();


  constructor()
  {

    var allkeys = Object.keys(this.types);
    this.keys =allkeys.slice(allkeys.length / 2);

  }

  ngOnInit()
  {}



  onSaveStuffType() : void {

    this.saveOrUpdate.emit(this.stuffTypeModel);



  }
}
