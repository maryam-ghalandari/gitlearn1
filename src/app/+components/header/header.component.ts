import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SearchboxComponent } from '../searchbox/searchbox.component';
import { BuyBasketComponent } from '../buy-basket/buy-basket.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header',
  imports: [LoginComponent, SearchboxComponent,LogoComponent, BuyBasketComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
