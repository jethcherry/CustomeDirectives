import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  template: `
<div>
    <label>Product Name</label>
    <input type="text" [(ngModel)]=" productName">

    <label>Product  Description</label>
    <input type="text" [(ngModel)]="productDescription">

    <label>Product  Price</label>
    <input type="text" [(ngModel)]="productPrice">
    <button (click)="addProduct()">Add Product</button>

</div>
`,
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  constructor(private ps:ProductService){}
  productName=""
  productDescription=""
  productPrice=""

  addProduct(){
    let product ={
      Id:this.ps.getProducts().length + 1,
      Name:this.productName,
      Description:this.productDescription,
      Price: +  this.productPrice
    }
    this.ps.addProduct(product)
  }

}
