// import {Headers, Response} from "@angular/http";
import {User} from "./user";
import 'rxjs/add/operator/toPromise';
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Response} from "@angular/http";








@Injectable()
export class UserService {


  private baseUrl='api/userlist';
  private saveUrl='api/saveUser';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

constructor(private http : HttpClient) {}
  users: User[];
getUsers():Promise<User[]>
{

  return this.http.get(this.baseUrl).toPromise().then(res => res as User[]

  ).catch(this.handleError);


}

saveOrUpdateUser(user: User) : Promise<number>
{

  return this.http.post(this.saveUrl, JSON.stringify(user) /*json.stringify(user)*/,{headers : this.headers}).toPromise().
  then( res => res  as number  /*this.returnResult(user)*/).catch(this.handleError);


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
