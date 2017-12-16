import {Component, Input} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {StuffType} from "../base/stufftype";
@Component({


  selector: 'app-type-component',
  templateUrl : './stufftype-dynamic.component.html'


})
export  class StuffTypeDynamicComponent
{

  @Input()
  selectedType: StuffType;
  @Input()
  form: FormGroup;
  get isValid() { return this.form.controls[this.selectedType.key].valid; }



}
