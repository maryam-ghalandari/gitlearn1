import { Routes } from '@angular/router';
import { HomeComponent } from './+pages/home/home.component';
import { CosmeticsComponent } from './+pages/cosmetics/cosmetics.component';
import { HaircareComponent } from './+pages/haircare/haircare.component';
import { LoginComponent } from './+pages/login/login.component';
import { SkincareComponent } from './+pages/skincare/skincare.component';
import { BrandsComponent } from './+pages/brands/brands.component';
import { PerfumeComponent } from './+pages/perfume/perfume.component';
import { MenComponent } from './+pages/men/men.component';
import { InstrumentsComponent } from './+pages/instruments/instruments.component';
import { BasketComponent } from './+pages/basket/basket.component';

export const routes: Routes = [
{path: 'home',component:HomeComponent},
{path: 'cosmetics',component:CosmeticsComponent},
{path: 'skincare',component:SkincareComponent},
{path: 'haircare',component:HaircareComponent},
{path: 'brands',component:BrandsComponent},
{path: 'perfume',component:PerfumeComponent},
  {path: 'men',component:MenComponent},
  {path: 'instruments',component:InstrumentsComponent},
  {path: 'login',component:LoginComponent},
  {path: 'basket',component:BasketComponent}
];
