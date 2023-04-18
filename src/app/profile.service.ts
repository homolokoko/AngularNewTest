import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iprofile } from './navbar/Iprofile';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profile:string = 'assets/profile/profile.json';
  constructor(private req:HttpClient) { }
  getProfile() : Observable<Iprofile[]>{
    return this.req.get<Iprofile[]>(this.profile); 
  }
}
