import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  name: string | null = '';
  email: string | null = '';

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    //  method : 1
    // this.route.params.subscribe((params) => {
    //   console.log(params);
    // });

    // method : 2
    // let name = this.route.snapshot.paramMap.get('name');
    // let email = this.route.snapshot.paramMap.get('email');
    // console.log(name, email);

    // this.name = this.route.snapshot.paramMap.get('name');
    // this.email = this.route.snapshot.paramMap.get('email');

    // method : 3
    // this.route.queryParams.subscribe((params) => {
    //   console.log(params);
    //   this.name = params['name'];
    //   this.email = params['email'];
    // });

    // method : 4
    this.route.data.subscribe((data) => (this.name = data['name']));
    this.route.data.subscribe((data) => (this.email = data['email']));
  }
}
