import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computes',
  imports: [],
  templateUrl: './computes.html',
  styleUrl: './computes.css',
})
export class Computes {
  count = signal<number>(1);
  double = computed<number>(() => this.count() * 2);
  tripple = computed<number>(() => this.count() * 3);

  updateCount() {
    this.count.update((val) => val + 1);
  }
}
