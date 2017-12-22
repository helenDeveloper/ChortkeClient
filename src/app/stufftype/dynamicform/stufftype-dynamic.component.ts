import {Component, EventEmitter, Input, OnChanges, Output} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {StuffType} from "../base/stufftype";
@Component({


  selector: 'app-type-component',
  templateUrl : './stufftype-dynamic.component.html'


})
export  class StuffTypeDynamicComponent implements OnChanges
{

  // form_: FormGroup;

  @Input()
  selectedType: StuffType;
  @Input()
 form :FormGroup;


constructor(private fb : FormBuilder)
{}

  get isValid() { return this.form.controls[this.selectedType.key].valid; }

ngOnChanges(eve)
{

  console.log("one change happened!!!!");

}

  onControlerChanges(event)
  {


    let controlList= event;

    this.form.addControl('stuffTypeItems' , this.fb.group(controlList) );


  }

}
