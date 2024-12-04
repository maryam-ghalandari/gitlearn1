import { Component } from '@angular/core';
import { FooterlinksComponent } from "../footerlinks/footerlinks.component";
import { CertificatesComponent } from "../certificates/certificates.component";
import { BeautymagazinComponent } from "../beautymagazin/beautymagazin.component";

@Component({
  selector: 'app-footer',
  imports: [FooterlinksComponent, CertificatesComponent, BeautymagazinComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
