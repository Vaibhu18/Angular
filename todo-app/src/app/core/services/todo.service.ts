import { Todo } from '../../features/todo/models/todo.model';

export class TodoService {
  private STORAGE_KEY = 'todos';

  private getTodos(): Todo[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
  }

  private saveTodos(todos: Todo[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos));
  }

  getAll() {
    return this.getTodos();
  }

  getById(id: string) {
    return this.getTodos().find((todo) => todo.id === id);
  }

  add(todo: Todo) {
    const todos = this.getTodos();
    todos.push(todo);
    this.saveTodos(todos);
  }

  update(updated: Todo) {
    const todos = this.getTodos();
    const index = todos.findIndex((todo) => todo.id === updated.id);
    todos[index] = updated;
    this.saveTodos(todos);
  }

  delete(id: string) {
    const todos = this.getTodos().filter((todo) => todo.id != id);
    this.saveTodos(todos);
  }
}
