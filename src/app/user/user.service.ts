import {Headers, Http, Response} from "@angular/http";
import {User} from "./user";
import 'rxjs/add/operator/toPromise';
import {Injectable} from "@angular/core";



@Injectable()
export class UserService {


  private baseUrl='api/userlist';
  private saveUrl='api/saveUser';
  private headers = new Headers({ 'Content-Type': 'application/json' });

constructor(private http : Http) {}
  users: User[];
getUsers():Promise<User[]>
{

  return this.http.get(this.baseUrl).toPromise().then(res => res.json()

  ).catch(this.handleError);


}

saveOrUpdateUser(user: User) : Promise<number>
{

  return this.http.post(this.saveUrl,JSON.stringify(user),{headers : this.headers}).toPromise().
  then( res => res.json() as number  /*this.returnResult(user)*/).catch(this.handleError);


}

/*

private returnResult(res :Response,user : User)
{

  const result= res.json() as number;
  let us= new User();
  us.username=user.username;
  us.id=result;
  return us;

}
*/

private handleError(error :any)
{

  console.error('an error occurred: ',error);
  return Promise.reject(error.message || error );



}

}
