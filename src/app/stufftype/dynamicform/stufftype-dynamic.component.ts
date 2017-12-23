import {Component, EventEmitter, Input, OnChanges, Output} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {StuffType} from "../base/stufftype";
@Component({


  selector: 'app-type-component',
  templateUrl: './stufftype-dynamic.component.html'


})
export class StuffTypeDynamicComponent implements OnChanges {

  private _selectedType: StuffType;
  // form_: FormGroup;

  @Input()
  set selectedType(value: StuffType) {

    this._selectedType = value;
    this.form.addControl();

  }

  get selectedType(): StuffType {
    return this._selectedType;

  }


  @Input()
  form: FormGroup;


  constructor(private fb: FormBuilder) {
  }

  get isValid() {
    return this.form.controls[this.selectedType.key].valid;
  }

  // get testf() {
  //
  // return 'stuffTypeItems.'+this.selectedType.key;
  //
  // }
  ngOnChanges(eve) {
    console.log("one change happened!!!!");

  }


}
