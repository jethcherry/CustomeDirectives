import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DisplayProductsComponent } from './display-products/display-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ChangeBackgroundDirective } from './Directives/changeBackground.directives';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, ChangeBackgroundDirective,FormsModule,DisplayProductsComponent,AddProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  


  
}
