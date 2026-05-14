import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { User } from './pages/user/user';
import { Profile } from './pages/profile/profile';
import { UpdateProfile } from './pages/update-profile/update-profile';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'user',
    children: [
      { path: '', component: User },
      { path: 'profile', component: Profile },
      { path: 'profile/update-profile', component: UpdateProfile },
    ],
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '**',
    component: NotFound,
  },
];
