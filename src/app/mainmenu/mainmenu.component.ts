import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { BeautymagazinComponent } from "../beautymagazin/beautymagazin.component";

@Component({
  selector: 'app-mainmenu',
  imports: [MenuComponent, BeautymagazinComponent],
  templateUrl: './mainmenu.component.html',
  styleUrl: './mainmenu.component.css'
})
export class MainmenuComponent {

}
