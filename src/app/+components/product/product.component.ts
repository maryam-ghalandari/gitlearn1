import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  productImage: undefined
  productBrand: string | undefined;
  productTitle: string | undefined;
  productPrice: string | undefined;
}
