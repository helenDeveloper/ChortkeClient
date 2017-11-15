import {Component, OnInit} from "@angular/core";
import {StuffTypeEnum} from "../eums/stufftypeemum";


@Component({
  selector : 'wi_stufftype_combo',
  templateUrl : './stufftype.component.html'

})

export class StuffTyypeType implements OnInit
{

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
