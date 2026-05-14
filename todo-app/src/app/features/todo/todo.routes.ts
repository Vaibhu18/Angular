import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AddTodo } from './pages/add-todo/add-todo';
import { AllTodos } from './pages/all-todos/all-todos';
import { TodoDetail } from './pages/todo-detail/todo-detail';
import { UpdateTodo } from './pages/update-todo/update-todo';

export const TODO_ROUTES: Routes = [
  { path: '', component: Home },
  { path: 'add', component: AddTodo },
  { path: 'todos', component: AllTodos },
  { path: 'todo/:id', component: TodoDetail },
  { path: 'todo/:id/edit', component: UpdateTodo },
];
