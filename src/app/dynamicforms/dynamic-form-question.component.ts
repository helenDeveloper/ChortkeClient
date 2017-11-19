
import {Component, Input} from "@angular/core";
import {StuffTypeBase} from "./base/stufftype-base";
import {FormGroup} from "@angular/forms";
@Component({  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'})
export class DynamicFormQuestionComponent {

  @Input() stitem: StuffTypeBase<any>;
  @Input() form :FormGroup;

  get isVisible() {return this.form.controls[this.stitem.key].valid}

}
