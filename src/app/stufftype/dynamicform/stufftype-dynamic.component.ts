import {Component, EventEmitter, Input, OnChanges, Output} from "@angular/core";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {StuffType} from "../base/stufftype";
import {isUndefined} from "util";
@Component({


  selector: 'app-type-component',
  templateUrl: './stufftype-dynamic.component.html'


})
export class StuffTypeDynamicComponent implements OnChanges {

  private _selectedType: StuffType;
  private _form: FormGroup;
  // form_: FormGroup;

  @Input()
  set selectedType(value: StuffType) {

    this._selectedType = value;
    if (!isUndefined(this._form)) {
      this.stuffTypeList.addControl(value.key, new FormControl(''));
      this.stuffTypeList.addControl(value + 'Price', new FormControl(''));

    }
  }

  get selectedType(): StuffType {
    return this._selectedType;

  }


  @Input()
  set form(fvalue: FormGroup) {

    this._form = fvalue;
    this.stuffTypeList.addControl(this._selectedType.key, new FormControl(''));
    this.stuffTypeList.addControl(this._selectedType.key + 'Price', new FormControl(''));
    this.fb.group(this._selectedType);
  }


  get form() {
    return this._form;

  }

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
    console.log('one change happened!!!!');

  }

  get stuffTypeList(): FormGroup {

    return this.form.get('stuffTypeList') as FormGroup;
  }

}
