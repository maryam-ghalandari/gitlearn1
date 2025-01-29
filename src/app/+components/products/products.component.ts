import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-products',
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
 products=[
  {id: 1000, brand:'kremlin', title:'شامپو کرملین مدل مراقبت از موی کراتین شده', price:'390000', pic:'/images/products/p5.jpg' },
  {id: 1001, brand:'kremlin', title:'شامپو کرملین حاوی روغن آرگان', price:'390000', pic:'/images/products/p6.jpg'},
  {id: 1002, brand:'kremlin', title:'شامپو کرملین مدل مراقبت از موی رنگ شده', price:'390000', pic:'/images/products/p7.jpg'},
  {id: 1003, brand:'kremlin', title:'شامپو کرملین مدل مراقبت از موی آسیب دیده', price:'390000', pic:'/images/products/p8.jpg'},
  {id: 1004, brand:'GIDARI', title:'سرم پوست گیداری مدل هیالورونیک اسید', price:'575000', pic:'/images/products/p1.jpg'},
  {id: 1005, brand:'CATOOS', title:'ژل شستشوی بدن کاتوس مدل آنتی آکنه', price:'253000', pic:'/images/products/p2.jpg'},
  {id: 1006, brand:'SUNIVERA', title:'کرم پودر سانیورا مدل آنتی آکنه رنگ متوسط ', price:'694000', pic:'/images/products/p3.jpg'},
  {id: 1007, brand:'SUNIVERA', title:'کرم ضد آفتاب سانیورا مناسب پوست چرب رنگ 1/5 رز بژ', price:'689000', pic:'/images/products/p4.jpg'}
 ]
}
