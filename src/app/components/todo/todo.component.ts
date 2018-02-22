import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TodoService } from './../../services/todo.service';
import { Todo } from './../../models/todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  editState: boolean = false;
  taskToEdit: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodo().subscribe(todos => {
      this.todos = todos;
    })
  }

  deleteTodo(event, todo: Todo) {
    this.clearState();
    this.todoService.deleteTodo(todo);
  }

  editTodo(event, todo: Todo){
    this.editState = true;
    this.taskToEdit = todo;
  }

  updateTask(todo: Todo){
    this.todoService.updateTask(todo);
    this.clearState();
  }

  clearState(){
    this.editState = false;
    this.taskToEdit = null;
  }

}
