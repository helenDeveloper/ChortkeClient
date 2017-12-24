import {Injectable} from "@angular/core";
import {StuffType} from "./base/stufftype";
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Injectable()
export class StuffTypeControlService {

  constructor() {
  }


  toFormGroup(sts: StuffType[]) {

    let group: any = {};
    sts.forEach(stuffType => {
      group[stuffType.key] = new FormControl(stuffType.value || '', Validators.required)
    });


    return new FormGroup(group);

  }


}
``
