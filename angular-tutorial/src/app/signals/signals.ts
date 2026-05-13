import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  count = signal(0);

  inc() {
    this.count.update((val) => val + 1);
  }

  dec() {
    this.count.update((val) => val - 1);
  }

  reset() {
    this.count.set(0);
  }
}
