import { Component } from '@angular/core';

@Component({
  selector: 'app-loops',
  imports: [],
  templateUrl: './loops.html',
  styleUrl: './loops.css',
})
export class Loops {
  languages = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular'];

  handleDelete(i: number) {
    this.languages.splice(i, 1);
  }

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
