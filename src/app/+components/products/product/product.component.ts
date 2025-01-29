import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-product',
  imports: [ButtonComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product:any;
}
