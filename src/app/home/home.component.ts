import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public _hideFormLogin:boolean=true;

  public hideFormLogin(){
    return this._hideFormLogin=!this._hideFormLogin;
  }
}
