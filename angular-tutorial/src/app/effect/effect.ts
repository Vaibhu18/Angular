import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect',
  imports: [],
  templateUrl: './effect.html',
  styleUrl: './effect.css',
})
export class Effect {
  // isDark = signal(false);

  // constructor() {
  //   effect(() => {
  //     if (this.isDark()) {
  //       document.body.style.backgroundColor = 'white';
  //       document.body.style.color = 'black';
  //     } else {
  //       document.body.style.backgroundColor = 'black';
  //       document.body.style.color = 'white';
  //     }
  //   });
  // }

  // toggle() {
  //   this.isDark.update((m) => !m);
  // }

  message = signal('');

  constructor() {
    effect(() => {
      if (this.message()) {
        setTimeout(() => {
          this.message.set('');
        }, 2000);
      }
    });
  }

  setMessage() {
    this.message.set("Hey, i'm Vaibhav Shinde");
  }
}
