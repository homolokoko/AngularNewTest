import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styles: [
  ]
})
export class ClientComponent {

  constructor(private router:Router){}

  public lists:any=[
    {"id":1,"name":'html'},
    {"id":2,"name":'css'},
    {"id":3,"name":'bootstrap'},
    {"id":4,"name":'javascript'},
    {"id":5,"name":'jquery'}
  ]

  public onSelect(_clientid:any){
    this.router.navigate(['clients',_clientid])
  }
}
