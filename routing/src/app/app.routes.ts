import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Documentation } from './pages/documentation/documentation';
import { PageNotFound } from './page-not-found/page-not-found';
import { Profile } from './pages/profile/profile';
import { User } from './pages/user/user';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'documentation', component: Documentation },
  {
    path: 'profile',
    component: Profile,
    data: { name: 'vaibhav shinde', email: 'vcode18@gmail.com' },
  },
  { path: 'user/:id', component: User },
  { path: '**', component: PageNotFound },
];
