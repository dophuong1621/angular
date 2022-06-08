import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  subjects: any
  constructor(
    private http: HttpClient,
    // private subSrv: ProductService
  ) { }
  // add(data: any): Observable<any>{
  //   return this.http.post<any>('http://localhost:4200/booking', data);
  // }

}
