import { Routes } from '@angular/router';
import { HomepageComponent } from './+pages/homepage/homepage.component';
import { LoginpageComponent } from './+pages/loginpage/loginpage.component';
import { BuybasketpageComponent } from './+pages/buybasketpage/buybasketpage.component';
import { CosmeticsComponent } from './+pages/cosmetics/cosmetics.component';
import { SkincareComponent } from './+pages/skincare/skincare.component';
import { HaircareComponent } from './+pages/haircare/haircare.component';
import { ToolsComponent } from './+pages/tools/tools.component';
import { MenComponent } from './+pages/men/men.component';
import { MomBabyComponent } from './+pages/mom-baby/mom-baby.component';
import { Component } from '@angular/core';

export const routes: Routes = [
{ path: '', redirectTo: '/homepage', pathMatch: 'full'},
{path: 'homepage', component: HomepageComponent},
{path: 'loginpage' ,component: LoginpageComponent},
{path: 'login' ,component: LoginpageComponent}
{path: 'buybasketpage', component: BuybasketpageComponent},
{path: 'cosmetics', component: CosmeticsComponent},
{path: 'skincare', component: SkincareComponent},
{path: 'haircare', component: HaircareComponent},
{path: 'tools', component: ToolsComponent},
{path: 'men', component: MenComponent},
{path: 'mom-baby', component: MomBabyComponent},
];
