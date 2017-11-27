
import {Injectable} from "@angular/core";
import {StuffTypeBase} from "../base/stuffType-base";
import {FormGroup} from "@angular/forms";
@Injectable()
export class StuffTypeControlService {

constructor()
{


}

temp = new StuffTypeBase(

  {
    value: 'meghdar',
    key: 'string',
    label: 'title',
    controlType: 'textbox'

  }

)



toFormGroup() {
  let groups: any = {};
    return new FormGroup(this.groups);
  }

}
