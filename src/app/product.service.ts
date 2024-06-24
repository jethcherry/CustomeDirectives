import { Injectable } from '@angular/core';
import { Product } from './Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  private products:Product []= [
   
      {
        Id:1,
        Name:"Laptop",
        Description:"LENOVO LAPTOP X260, ",
        Price:10000
      },
      {
        Id:2,
        Name:"CAMERA",
        Description:"Ordro AC5 4K HD  ",
        Price:59899
      },
      {
        Id:3,
        Name:"Gas Stove",
        Description:"Nunix Top Infrared Gas Stove  ",
        Price:59899
      }
    ]
  

  addProduct(newProduct:Product){
    this.products.push(newProduct)
  }
  getProducts(){
    return this.products
  }
  getProduct(id:number){
    return this.products.find(x=>x.Id===id)
  }
  deleteProduct(id:number){
    let index = this.products.findIndex(x=>x.Id===id)
    if(index>=0){
      this.products.splice(index,1)
    }
  }

  updateProduct(id:number,updatedProduct:Product){
    let index = this.products.findIndex(x=>x.Id===id)
    if(index >=0){
      this.products[index] = updatedProduct
    }
  }
}
