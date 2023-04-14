import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

/**
 * @title Toolbar overview
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit{

  constructor(private _productService:ProductsService){};

  public showFiller = false;

  public maxWidth = 0;

  @Input('name') public myname: any;
  @Output() public showContent = new EventEmitter();

  @Output() public showSidenav(){
    this.showFiller = !this.showFiller;
    this.showContent.emit(this.showFiller);
  }

  public products:any = [];
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.products = this._productService.getProduct();
  }
  
};


