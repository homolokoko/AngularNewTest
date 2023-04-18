import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from './Iproducts';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _url:string="/assets/products/products.json";

  constructor(private http:HttpClient) { }
  getProduct():Observable<IProducts[]>
  {
    return this.http.get<IProducts[]>(this._url);
  }

}
