import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  userData = {
    name: '',
    email: '',
    city: '',
  };

  handleSubmit(name: string, email: string, city: string) {
    console.log(name, email, city);
  }
}
