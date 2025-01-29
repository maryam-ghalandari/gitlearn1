import { Component } from '@angular/core';
import { AdsComponent } from '../../+components/ads/ads.component';
import { HeaderComponent } from '../../+components/header/header.component';
import { MenuComponent } from '../../+components/menu/menu.component';
import { BannerComponent } from '../../+components/banner/banner.component';
import { DiscountsComponent } from '../../+components/discounts/discounts.component';
import { BestsellersComponent } from '../../+components/bestsellers/bestsellers.component';
import { NewproductsComponent } from '../../+components/newproducts/newproducts.component';
import { BrandsComponent } from '../../+components/brands/brands.component';

@Component({
  selector: 'app-homepage',
  imports: [AdsComponent, HeaderComponent, MenuComponent, BannerComponent, DiscountsComponent, BestsellersComponent, NewproductsComponent, BrandsComponent, ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
