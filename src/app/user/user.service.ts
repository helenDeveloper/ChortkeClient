import {Http} from "@angular/http";
import {User} from "./user";
import 'rxjs/add/operator/toPromise';
import {Injectable} from "@angular/core";


@Injectable()
export class UserService {


  private baseUrl='api/userlist';


constructor(private http : Http) {}

getUsers():Promise<User[]>
{

  return this.http.get(this.baseUrl).toPromise().then(res => res.json().data).catch(this.handleError);


}

private handleError(error :any)
{

  console.error('an error occurred: ',error);
  return Promise.reject(error.message || error )



}

}
