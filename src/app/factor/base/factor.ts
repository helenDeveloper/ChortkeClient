import {StuffType} from "../../stufftype/base/stufftype";
import {User} from "../../user/user";
export class Factor
{

  id ?: number;
  title:string;
  price: number;
   stuffTypes?: StuffType[];
   purchaseDate?: Date;
   buyer?: User;
   controllerList : any[];


   constructor()
   {}



}
