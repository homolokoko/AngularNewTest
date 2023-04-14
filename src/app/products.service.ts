import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  getProduct(){
    return [
      {
        id:1,
        name:'product1',
        code:'X01',
        quantity:100,
        price:1100,
        starRating:25
      },
      {
        id:2,
        name:'product2',
        code:'X02',
        quantity:200,
        price:2200,
        starRating:40
      },
      {
        id:3,
        name:'product3',
        code:'X03',
        quantity:300,
        price:3300,
        starRating:50
      },
      {
        id:4,
        name:'product4',
        code:'X04',
        quantity:400,
        price:4400,
        starRating:30
      }
    ];
  }
}
