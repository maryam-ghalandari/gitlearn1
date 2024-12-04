import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { SearchComponent } from "../search/search.component";
import { LoginComponent } from "../login/login.component";
import { BuybasketComponent } from "../buybasket/buybasket.component";

@Component({
  selector: 'app-logosearchlogin',
  imports: [LogoComponent, SearchComponent, LoginComponent, BuybasketComponent],
  templateUrl: './logosearchlogin.component.html',
  styleUrl: './logosearchlogin.component.css'
})
export class LogosearchloginComponent {

}
