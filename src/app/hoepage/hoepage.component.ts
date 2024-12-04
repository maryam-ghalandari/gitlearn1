import { Component } from '@angular/core';
import { AdsComponent } from "../ads/ads.component";
import { TopmenuComponent } from "../topmenu/topmenu.component";
import { LogosearchloginComponent } from "../logosearchlogin/logosearchlogin.component";
import { MainmenuComponent } from "../mainmenu/mainmenu.component";
import { BannerComponent } from "../banner/banner.component";
import { DiscountsComponent } from "../discounts/discounts.component";
import { BestsellersComponent } from "../bestsellers/bestsellers.component";
import { BrandsComponent } from "../brands/brands.component";
import { NewproductsComponent } from "../newproducts/newproducts.component";
import { SocialmediaComponent } from "../socialmedia/socialmedia.component";
import { FooterComponent } from "../footer/footer.component";
import { CopyrightsComponent } from "../copyrights/copyrights.component";

@Component({
  selector: 'app-hoepage',
  imports: [AdsComponent, TopmenuComponent, LogosearchloginComponent, MainmenuComponent, BannerComponent, DiscountsComponent, BestsellersComponent, BrandsComponent, NewproductsComponent, SocialmediaComponent, FooterComponent, CopyrightsComponent],
  templateUrl: './hoepage.component.html',
  styleUrl: './hoepage.component.css'
})
export class HoepageComponent {

}
