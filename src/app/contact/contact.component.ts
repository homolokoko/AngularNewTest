import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  myfrmGroup :FormGroup;

  constructor(
    private _frmbuilder:FormBuilder,
    private _emailService:EmailService,
    )
    {
      // this.frmGroup = this._frmbuilder.group({
      //   email:'',
      //   message:'',
      // });
    }

  ngOnInit(){
      this.myfrmGroup = new FormGroup(
        {
          email : new FormControl(),
          message : new FormControl(),
        }
      );
  }

  public onSubmit(){
    this._emailService.postEmail(this.myfrmGroup).subscribe();
  }

  
}
