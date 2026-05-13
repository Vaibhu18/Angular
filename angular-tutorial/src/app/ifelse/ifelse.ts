import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  imports: [],
  templateUrl: './ifelse.html',
  styleUrl: './ifelse.css',
})
export class Ifelse {
  marks = 35;
  showBox = true;

  toggleBox() {
    this.showBox = !this.showBox;
  }
}
