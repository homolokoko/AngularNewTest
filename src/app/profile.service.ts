import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProfile } from './Iprofile';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profile:string = 'assets/profile/profile.json';
  constructor(private req:HttpClient) { }
  getProfile() : Observable<IProfile[]>{
    return this.req.get<IProfile[]>(this.profile); 
  }
}
