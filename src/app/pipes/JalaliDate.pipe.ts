

import {Injectable, Pipe, PipeTransform} from "@angular/core";
import * as moment from 'jalali-moment';
@Pipe({
  name: 'dateConvertor'


})
@Injectable()
export class JalaliDatePipe implements  PipeTransform{

transform(buyDate: Date, filter ?: Object)
{

  if(buyDate) {
    let MomentDate = moment(buyDate);
    return MomentDate.format("jYYYY/jMM/jDD");
  }

}




}
