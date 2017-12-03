
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StuffType} from "./base/stufftype";
@Injectable()
export class StuffTypeService
{

  private baseUrl ='api/stufftype/list';
  private saveUrl ='api/stufftype/save';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http : HttpClient)
  {}

  getStuffTypes() : Promise<StuffType[]>{

    return this.http.get(this.baseUrl).toPromise().then(res => res as StuffType[]).catch(this.handleError);

  }
  saveOrUpdateStuffType(stuffType: StuffType) : Promise<number>
  {

    return this.http.post(this.saveUrl, JSON.stringify(stuffType) /*json.stringify(user)*/,{headers : this.headers}).toPromise().
    then( res => res  as number  /*this.returnResult(user)*/).catch(this.handleError);


  }




  private handleError(error :any)
  {

    console.error('an error occurred: ',error);
    return Promise.reject(error.message || error );



  }

}
