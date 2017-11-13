import {Component, OnInit} from "@angular/core";
import {StuffTypeEnum} from "../eums/stufftypeemum";


@Component({
  selector : 'wi_stufftype_combo',
  templateUrl : './stufftype.component.html'

})

export class StuffTyypeType implements OnInit
{

selected = 'option1';

types : StuffTypeEnum;


  constructor()
  {}

  ngOnInit()
  {}
}
