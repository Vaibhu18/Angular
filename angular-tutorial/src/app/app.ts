import { Component, signal } from '@angular/core';
import { Counter } from './counter/counter';
import { Login } from './login/login';
import { Ifelse } from './ifelse/ifelse';
import { Loops } from './loops/loops';
import { Signals } from './signals/signals';
import { Computes } from './computes/computes';
import { Validation } from './validation/validation';
import { Validation2 } from './validation2/validation2';
import { Effect } from './effect/effect';
import { Validation3 } from './validation3/validation3';
import { Table } from './table/table';

@Component({
  selector: 'app-root',
  imports: [
    Counter,
    Login,
    Ifelse,
    Loops,
    Signals,
    Computes,
    Validation,
    Validation2,
    Effect,
    Validation3,
    Table,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-tutorial');
}
