import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmail } from './IEmail';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  
  public urlPost: string="http://localhost:3000/email";
  constructor(private http:HttpClient) {}

   public postEmail(data:any):Observable<any>{
    return this.http.post<any>(this.urlPost,data);
   }

}
