import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  navLinks = [
    { title: 'Home', path: 'home' },
    { title: 'User', path: 'user' },
    { title: 'About', path: 'about' },
    { title: 'Contact', path: 'contact' },
  ];
}
