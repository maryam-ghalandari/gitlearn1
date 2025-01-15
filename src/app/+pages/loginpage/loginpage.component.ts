import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  imports: [RouterLink, FormsModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
login() {
throw new Error('Method not implemented.');
}
  username: string='';
  password: string='';
reset() {
  this.username=this.password='';
}
}
