import { Component,Input } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() public showResume:any;
  constructor(private _profileService:ProfileService){}
  public profile:any=[];
 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this._profileService.getProfile().subscribe( data => this.profile=data);
 }
}
