import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginpageComponent } from '../../+pages/loginpage/loginpage.component';

@Component({
  selector: 'app-logo',
  imports: [RouterLink, LoginpageComponent],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {

}
