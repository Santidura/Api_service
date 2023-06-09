import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  private apiurl = 'https://fakestoreapi.com/products'

  
  constructor( private http : HttpClient) { }

  public getapi() : Observable<any>{
    return this.http.get(this.apiurl);
    
  }


}




