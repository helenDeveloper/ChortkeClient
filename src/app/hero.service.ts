import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export  class HeroService {


  private baseUrl='api/hi';

           constructor(private http: Http){}

getMessage():Promise<string>
{

  return  this.http.get(this.baseUrl).toPromise().then(res => res.json().data).catch(this.handleError);

}

private handleError(error :any)
{




  console.error("an error accured",error);
  return Promise.reject(error.message || error);
}



}
