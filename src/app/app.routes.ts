import { Routes } from '@angular/router';
import { HomepageComponent } from './+pages/homepage/homepage.component';
import { LoginpageComponent } from './+pages/loginpage/loginpage.component';
import { BuybasketpageComponent } from './+pages/buybasketpage/buybasketpage.component';

export const routes: Routes = [
{path: 'homepage', component: HomepageComponent},
{path: 'loginpage' ,component: LoginpageComponent},
{path: 'buybasketpage', component: BuybasketpageComponent}
];
