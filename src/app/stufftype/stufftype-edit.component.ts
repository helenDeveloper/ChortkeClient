import {Component, Input, OnInit} from "@angular/core";
import {StuffTypeEnum} from "../eums/stufftypeemum";
import {StuffType} from "./base/stufftype";


@Component({
  selector : 'app-stufftype-edit',
  templateUrl : './stufftype-edit.component.html'

})

export class StuffTyypeType implements OnInit
{

@Input() aStuffType : StuffType;

selected = 'string';
  types = StuffTypeEnum;
keys:any[];


  constructor()
  {

    var allkeys = Object.keys(this.types);
    this.keys =allkeys.slice(allkeys.length / 2);

  }

  ngOnInit()
  {}



  show() : void {

    alert(this.selected);



  }
}
