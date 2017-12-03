
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Factor} from "./base/factor";
import {catchError} from "rxjs/operators";
import {of} from "rxjs/observable/of";
@Injectable()
export  class FactorService {


  private listUrl = 'api/factor/list';
private  saveUrl ='api/factor/save';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http : HttpClient  )
  {}




  getFactors() : Observable<Factor[]>{

    return this.http.get<Factor[]>(this.listUrl).pipe(catchError(this.handleError('getFactors',[])));

  }
  saveOrUpdateFactor(factor: Factor) : Observable<any>
  {

    return this.http.post<any>(this.saveUrl, factor /*json.stringify(user)*/,{headers : this.headers}).pipe(catchError(this.handleError('saveOrUpdateFactor',[])));



  }




  private handleError<T>(operation = 'operation', result?: T)
  {

    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };



  }




}
