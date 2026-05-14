import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [NgFor],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User' },
    { id: 5, name: 'Tom Wilson', email: 'tom@example.com', role: 'Admin' },
    { id: 6, name: 'Sara Lee', email: 'sara@example.com', role: 'User' },
    { id: 7, name: 'Mike Davis', email: 'mike@example.com', role: 'Editor' },
    { id: 8, name: 'Emily Taylor', email: 'emily@example.com', role: 'User' },
    { id: 9, name: 'David Clark', email: 'david@example.com', role: 'Admin' },
    { id: 10, name: 'Lisa Turner', email: 'lisa@example.com', role: 'User' },
  ];
}
