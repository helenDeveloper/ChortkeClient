import {Component, OnInit} from "@angular/core";
import {StuffTypeService} from "../stuffType.service";
import {StuffType} from "../base/stufftype";


@Component({
  /*selector : 'wi_stufftype_combo',*/
  templateUrl : './stufftype-list.component.html',
  providers : [StuffTypeService]

})

export class StuffTypeList implements OnInit
{

  stuffTypes : StuffType[];


  constructor(private  stuffTypeService : StuffTypeService)
  {





  }

  ngOnInit()
  {

this.stuffTypeService.getStuffTypes().then(res => this.stuffTypes = res);

  }


}
