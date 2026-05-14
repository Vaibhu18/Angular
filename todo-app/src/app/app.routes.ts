import { Routes } from '@angular/router';
import { Home } from './features/todo/pages/home/home';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/todo/todo.routes').then((m) => m.TODO_ROUTES),
  },
];
