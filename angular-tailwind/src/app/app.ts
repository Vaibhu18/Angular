import { Component } from '@angular/core';
import { Registration } from './registration/registration';

@Component({
  selector: 'app-root',
  imports: [Registration],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

}
