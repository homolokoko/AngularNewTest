import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService:ProductsService){}

  public items:any;

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.productService.getProduct().subscribe(data => this.items = data )
  }

}
