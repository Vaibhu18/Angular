import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {}
