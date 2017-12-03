import {StuffType} from "../../stufftype/base/stufftype";
import {User} from "../../user/user";
export class Factor
{

  id ?: number;
  title:string;
  price: number;
   StuffTypes?: StuffType[];
   purchaseDate?: Date;
   buyer?: User;


   constructor()
   {}



}
