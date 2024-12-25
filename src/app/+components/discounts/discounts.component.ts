import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-discounts',
  imports: [ProductComponent],
  templateUrl: './discounts.component.html',
  styleUrl: './discounts.component.css'
})
export class DiscountsComponent {

}
