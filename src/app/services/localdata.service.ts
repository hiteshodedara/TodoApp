import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocaldataService {

  private storageKey = 'TodoDB';

  constructor() {}

  private getTodosFromLocalStorage(){
    const todosString = localStorage.getItem(this.storageKey);
    return todosString ? JSON.parse(todosString) : [];
  }

  private setTodosToLocalStorage(todos: Todo[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(todos));
  }

   getTodos(): Observable<Todo[]>{
    return of(this.getTodosFromLocalStorage());
  }

  getoneTOdo(id: number) {
    const todos = this.getTodosFromLocalStorage();
    const todo = todos.find((t: Todo) => t.id === id);
    return of(todo)
    }

  addTodo(todo: Todo) {
    const todos = this.getTodosFromLocalStorage();
    todos.push(todo);
    this.setTodosToLocalStorage(todos);
  }

  updateTodoKey(id: number, newKey: string,title:string,disc:string) {
    const todos = this.getTodosFromLocalStorage();
    const index = todos.findIndex((todo: { id: number; }) => todo.id === id);

    if (index !== -1) {
      todos[index].key = newKey;
      todos[index].title=title
      todos[index].discription=disc
      this.setTodosToLocalStorage(todos);
    }

  }

  deleteTodo(id: number) {
    const todos = this.getTodosFromLocalStorage();
    const updatedTodos = todos.filter((todo: { id: number; }) => todo.id !== id);
    this.setTodosToLocalStorage(updatedTodos);
  }
}
