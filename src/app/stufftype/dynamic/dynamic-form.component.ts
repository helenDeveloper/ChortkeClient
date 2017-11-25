import {Component} from "@angular/core";
import {StuffTypeControlService} from "../service/stuffType-control.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ StuffTypeControlService ]
})
export class DynamicFormComponent implements OnInit {


  form: FormGroup;
  payLoad = '';

  constructor(private qcs: StuffTypeControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup();
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
