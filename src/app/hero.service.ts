import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export  class HeroService {


  private baseUrl='api/hi';

           constructor(private http: Http){}





}
