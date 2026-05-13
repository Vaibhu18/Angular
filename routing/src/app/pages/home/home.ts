import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // constructor(private router: Router) {}
  // goToProfile() {
  //   this.router.navigate(['profile'], {
  //     queryParams: { name: 'vaibhav shinde', email: 'vcode@gmail.com' },
  //   });
  // }

  users = [
    {
      id: 1,
      name: 'Virat',
      age: 35,
      email: 'virat@gmail.com',
    },
    {
      id: 2,
      name: 'Rajat',
      age: 28,
      email: 'rajat@gmail.com',
    },
    {
      id: 3,
      name: 'DDP',
      age: 27,
      email: 'ddp@gmail.com',
    },
    {
      id: 4,
      name: 'Josh',
      age: 33,
      email: 'josh@gmail.com',
    },
  ];
}
