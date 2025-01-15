import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './+components/banner/banner.component';
import { AdsComponent } from './+components/ads/ads.component';
import { MenuComponent } from './+components/menu/menu.component';
import { DiscountsComponent } from './+components/discounts/discounts.component';
import { FooterComponent } from './+components/footer/footer.component';
import { CopyrightsComponent } from './+components/copyrights/copyrights.component';
import { BrandsComponent } from './+components/brands/brands.component';
import { ProductComponent } from './+components/product/product.component';
import { HomepageComponent } from './+pages/homepage/homepage.component';
import { LoginpageComponent } from './+pages/loginpage/loginpage.component';
import { BuybasketpageComponent } from './+pages/buybasketpage/buybasketpage.component';
import { LogoComponent } from './+components/logo/logo.component';
import { MainCategoryComponent } from './+components/main-category/main-category.component';
import { BestsellersComponent } from './+components/bestsellers/bestsellers.component';
import { NewproductsComponent } from './+components/newproducts/newproducts.component';
import { HeaderComponent } from './+components/header/header.component';
import { ButtonComponent } from './+components/button/button.component';



@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent, BannerComponent,
    AdsComponent, MenuComponent, DiscountsComponent,
    FooterComponent, CopyrightsComponent,
    BrandsComponent, ProductComponent,
    MainCategoryComponent, HomepageComponent, LoginpageComponent,
    BuybasketpageComponent, BestsellersComponent, NewproductsComponent,
    ButtonComponent
   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app1';
}
