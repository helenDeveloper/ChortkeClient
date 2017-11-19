
import {Injectable} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {StuffTypeBase} from "./base/stufftype-base";
@Injectable()
export class StuffTypeControlService {

constructor()
{

}
toFormGroup(items: StuffTypeBase<any>[] ) {

  let group: any = {};

  items.forEach(item => {
    group[item.key] = new FormControl(item.value || '');
  });
  return new FormGroup(group);



}
}
