import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './+components/banner/banner.component';
import { AdsComponent } from './+components/ads/ads.component';
import { MenuComponent } from './+components/menu/menu.component';
import { DiscountsComponent } from './+components/discounts/discounts.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './+components/footer/footer.component';
import { CopyrightsComponent } from './+components/copyrights/copyrights.component';
import { NewproductsComponent } from './newproducts/newproducts.component';
import { BrandsComponent } from './+components/brands/brands.component';
import { ProductComponent } from './+components/product/product.component';
import { BestsellersComponent } from './bestsellers/bestsellers.component';
import { MaincategoryComponent } from './maincategory/maincategory.component';

@Component({
  selector: 'app-root',
  imports: [LogoComponent, BannerComponent, AdsComponent, MenuComponent, DiscountsComponent, FooterComponent, CopyrightsComponent, NewproductsComponent, BrandsComponent, ProductComponent, BestsellersComponent, MaincategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app1';
}
