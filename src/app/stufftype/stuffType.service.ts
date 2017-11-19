
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {StuffType} from "./base/stufftype";
@Injectable()
export class StuffTypeService
{

  private baseUrl ='api/stuttTypelist';

  constructor(private http : HttpClient)
  {}

  getStuffTypes() : Promise<StuffType[]>{

    return this.http.get(this.baseUrl).toPromise().then(res => res as StuffType[]).catch(this.handleError);

  }

  private handleError(error :any)
  {

    console.error('an error occurred: ',error);
    return Promise.reject(error.message || error );



  }

}
