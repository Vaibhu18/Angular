import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count = 0;

  handle(operation: string) {
    if (operation == 'inc') {
      this.count++;
    }
    if (operation == 'dec') {
      if (this.count > 0) {
        this.count--;
      }
    }
    if (operation == 'reset') {
      this.count = 0;
    }
  }

  // Inc() {
  //   this.count++;
  // }

  // Dec() {
  //   if (this.count > 0) {
  //     this.count--;
  //   }
  // }

  // Reset() {
  //   this.count = 0;
  // }
}
