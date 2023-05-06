import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public frmGroup:FormGroup;

  ngOnInit(){
      this.frmGroup = new FormGroup(
        {
          email : new FormControl(),
          message : new FormControl(),
        }
      );
  }

  public onSubmit(){
    console.log(this.frmGroup)
  }

  
}
