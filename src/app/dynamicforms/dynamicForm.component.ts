import {Component, Input, OnInit} from "@angular/core";
import {StuffTypeControlService} from "./stuffType-control.service";
import {StuffTypeBase} from "./base/stufftype-base";
import {FormGroup} from "@angular/forms";
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamicForm.component.html',
  providers: [ StuffTypeControlService ]


})
export class  DynamicFormComponent implements  OnInit{
  @Input() types : StuffTypeBase<any>[] = [];

  form : FormGroup;
  payload ='';
constructor( private stuffTypeControlService : StuffTypeControlService)
{}

ngOnInit()
{
  this.form=this.stuffTypeControlService.toFormGroup(this.types);


}
onSubmit() {

this.payload=JSON.stringify(this.form.value);

}
}
