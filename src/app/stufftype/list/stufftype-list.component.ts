import {Component, OnInit} from "@angular/core";
import {StuffTypeService} from "../stuffType.service";
import {StuffType} from "../base/stufftype";
import {Subject} from "rxjs/Subject";


@Component({
  /*selector : 'wi_stufftype_combo',*/
  templateUrl : './stufftype-list.component.html',
  providers : [StuffTypeService]

})

export class StuffTypeListComponent implements OnInit
{

  stuffTypes : StuffType[];
  selectedItem: StuffType;

  constructor(private  stuffTypeService : StuffTypeService)
  {

      this.selectedItem= new StuffType();



  }

  ngOnInit()
  {

this.stuffTypeService.getStuffTypes().then(res => this.stuffTypes = res);

  }
  onSaveOrUpdate(event)
  {



    this.stuffTypeService.saveOrUpdateStuffType(event.item).then(res => { this.addToList(res,event.item), this.showMessage(event.su)});

  }
  private  addToList(res: number,event)
  {
    const stuffType =new StuffType('',event.label, event.contentType);
    // stuffType.label=event.label;
    // stuffType.contentType= event.contentType;
    this.stuffTypes.push(stuffType);


  }

  private  showMessage(su : Subject<any>) : void {

su.next();
    alert('hello');

    this.selectedItem= new StuffType();

  }
}
