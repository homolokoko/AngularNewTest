import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap,Route } from '@angular/router';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styles: [
  ]
})
export class ClientDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private router:Router){}

  public _clientid:any;
  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // let id:any = this.routed.snapshot.paramMap.get('id');
    // this._clientid = parseInt(id);
    this.activatedRoute.paramMap.subscribe((_params:ParamMap)=>{
      let id:any = _params.get('id');
      this._clientid = parseInt(id);
    }
    );
  }

  public goback(_clientid:any){
    let _goback = this._clientid-1;
    this.router.navigate(['clients',_goback])
  }

  public gofront(_clientid:any){
    let _gofront =  this._clientid+1;
    this.router.navigate(['clients',_gofront])
  }
  
  public onView(){
    this.router.navigate(['client-overview'],{relativeTo:this.activatedRoute})
  }

  public onContact(){
    this.router.navigate(['client-contact'],{relativeTo: this.activatedRoute})
  }
}




